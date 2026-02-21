import { createAgentIDMiddleware } from '@agent-id/nextjs';
import { NextRequest } from 'next/server';

const agentID = createAgentIDMiddleware();

function normalizeAuthorization(request: NextRequest): NextRequest {
  const authorization = request.headers.get('authorization');
  if (!authorization || authorization.startsWith('Bearer ')) {
    return request;
  }

  const match = authorization.match(/^bearer\s+(.+)$/i);
  const token = match?.[1]?.trim();
  if (!token) {
    return request;
  }

  const headers = new Headers(request.headers);
  headers.set('authorization', `Bearer ${token}`);

  return new NextRequest(request.url, {
    method: request.method,
    headers,
    body: request.body,
  });
}

export function proxy(request: NextRequest) {
  return agentID(normalizeAuthorization(request));
}

// Protect your API routes
export const config = {
  matcher: '/:path*',
};
