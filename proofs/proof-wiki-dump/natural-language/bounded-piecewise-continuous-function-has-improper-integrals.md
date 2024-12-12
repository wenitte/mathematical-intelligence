# 

Source: https://proofwiki.org/wiki/Bounded_Piecewise_Continuous_Function_has_Improper_Integrals

Theorem
Let $f$ be a real function defined on a closed interval $\closedint a b$, $a < b$. 
Let $f$ be piecewise continuous and bounded on $\closedint a b$.

Then $f$ is a piecewise continuous function with improper integrals.


Proof
Let $f$ be piecewise continuous and bounded on $\closedint a b$.
It is sufficient to prove that the improper integral $\ds \int_{ {x_{i - 1} }^+}^{ {x_i}^-} \map f x \rd x$ exists for every $i \in \set {1, 2, \ldots, n}$.

Let $i \in \set {1, 2, \ldots, n}$.
Let $c$ be a point in $\openint {x_{i − 1} } {x_i}$.

By definition, the improper integral $\ds \int_{ {x_{i - 1} }^+}^{ {x_i}^-} \map f x \rd x$ exists if and only if:

$\ds \lim_{\gamma \mathop \to {x_{i - 1} }^+} \int_\gamma^c \map f x \rd x$
and:

$\ds \lim_{\gamma \mathop \to {x_i}^-} \int_c^\gamma \map f x \rd x$
both exist.

By Bounded Piecewise Continuous Function is Darboux Integrable we know that $f$ is Darboux integrable on $\closedint a b$.
Therefore, $f$ is Darboux integrable on every closed subinterval of $\closedint a b$. 
Accordingly, the following Darboux integrals:

$\ds \int_{x_{i - 1} }^c \map f x \rd x$
$\ds \int_{\gamma_1}^c \map f x \rd x$
$\ds \int_c^{\gamma_2} \map f x \rd x$
$\ds \int_c^{x_i} \map f x \rd x$
all exist where $\gamma_1 \in \openint {x_{i − 1} } c$ and $\gamma_2 \in \openint c {x_i}$.
Note that $f$ is bounded on $\closedint a b$ as $f$ is piecewise continuous and bounded.
Therefore, a bound $B$ exists for $f$ on $\closedint a b$.

We have:














\(\ds \size {\int_{\gamma_1}^c \map f x \rd x - \int_{x_{i - 1} }^c \map f x \rd x}\)

\(=\)







\(\ds \size {\int_{x_{i - 1} }^{\gamma_1} \map f x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds B \size {\gamma_1 - x_{i - 1} }\)





Darboux's Theorem: Corollary



which approaches $0$ as $\gamma_1$ approaches $x_{i − 1}$.

This shows that $\ds \lim_{\gamma \mathop \to x_{i - 1}+} \int_\gamma^c \map f x \rd x$ equals $\ds \int_{x_{i - 1} }^c \map f x \rd x$.
From this we gather that $\ds \lim_{\gamma \mathop \to  {x_{i - 1} }^+} \int_\gamma^c \map f x \rd x$ exists.

Also:














\(\ds \size {\int_c^{x_i} \map f x \rd x - \int_c^{\gamma_2} \map f x \rd x}\)

\(=\)







\(\ds \size {\int_{\gamma_2}^{x_i} \map f x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds B \size {x_i - \gamma_2}\)





Darboux's Theorem: Corollary



which approaches $0$ as $\gamma_2$ approaches $x_i$.

This shows that $\ds \lim_{\gamma \mathop \to x_i-} \int_c^\gamma \map f x \rd x$ equals $\ds \int_c^{x_i} \map f x \rd x$.
From this we gather that $\ds \lim_{\gamma \mathop \to {x_i}^-} \int_c^\gamma \map f x \rd x$ exists.

Since $i$ is arbitrary, we have shown that $\ds \lim_{\gamma \mathop \to {x_{i - 1} }^+} \int_\gamma^c \map f x \rd x$ and $\ds \lim_{\gamma \mathop \to {x_i}^-} \int_c^\gamma \map f x \rd x$ exist for every $i \in \set {1, \ldots, n}$.
Therefore, $\ds \int_{ {x_{i - 1} }^+}^{ {x_i}^-} \map f x \rd x$ exists for every $i \in \set {1, 2, \ldots, n}$.
That is, $f$ is a piecewise continuous function with improper integrals.
$\blacksquare$


Also see
Piecewise Continuous Function with Improper Integrals may not be Bounded




