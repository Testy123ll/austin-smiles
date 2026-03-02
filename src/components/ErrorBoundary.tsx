import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorBoundary] Caught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1f2d",
          color: "#fff",
          fontFamily: "sans-serif",
          padding: "2rem",
          textAlign: "center",
        }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Austin Elite Smiles
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "440px" }}>
            Something went wrong loading the page. Please refresh and try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 2rem",
              background: "#14b8a6",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Refresh Page
          </button>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <pre style={{
              marginTop: "2rem",
              padding: "1rem",
              background: "rgba(255,0,0,0.1)",
              color: "#f87171",
              fontSize: "0.75rem",
              textAlign: "left",
              maxWidth: "600px",
              overflow: "auto",
            }}>
              {this.state.error.toString()}
            </pre>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}
