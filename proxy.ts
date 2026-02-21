import { createAgentPassMiddleware } from '@agent-id/nextjs';
import type { NextRequest } from 'next/server';

const agentPass = createAgentPassMiddleware();

export function proxy(request: NextRequest) {
  return agentPass(request);
}

// Protect your API routes
export const config = {
  matcher: '/:path*',
};

