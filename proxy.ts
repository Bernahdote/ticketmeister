import { createAgentIDMiddleware } from '@agent-id/nextjs';
import type { NextRequest } from 'next/server';

const agentID = createAgentIDMiddleware();

export function proxy(request: NextRequest) {
  return agentID(request);
}

// Protect your API routes
export const config = {
  matcher: '/:path*',
};

