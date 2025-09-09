// Polyfills for MSW v2 - must be loaded before any other modules
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Add other required polyfills
const { ReadableStream, TransformStream } = require("stream/web");
global.ReadableStream = ReadableStream;
global.TransformStream = TransformStream;

// Add MessagePort polyfill
const { MessagePort, MessageChannel } = require("worker_threads");
global.MessagePort = MessagePort;
global.MessageChannel = MessageChannel;

// Add BroadcastChannel polyfill
const { BroadcastChannel } = require("worker_threads");
global.BroadcastChannel = BroadcastChannel;

// Set up fetch polyfill
const { fetch, Headers, Request, Response } = require("undici");
global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
