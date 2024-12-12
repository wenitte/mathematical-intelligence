# 

Source: https://proofwiki.org/wiki/Complex_Exponential_is_Uniformly_Continuous_on_Half-Planes/Corollary

Corollary to Complex Exponential is Uniformly Continuous on Half-Planes
Let $X$ be a set.
Let $\family {g_n}$ be a family of mappings $g_n : X \to \C$.
Let $g_n$ converge uniformly to $g: X \to \C$.
Let there be a constant $a \in \R$ such that $\map \Re {\map g x} \le a$ for all $x \in X$.

Then $\exp g_n$ converges uniformly to $\exp g$.


Proof
By uniform convergence, there exists $N > 0$ such that $\cmod {\map {g_n} x - \map g x} \le 1$ for all $n > N$.
Then $\map \Re {\map {g_n} x} \le a + 1$.
The result now follows from:

Complex Exponential is Uniformly Continuous on Half-Planes, applied to the half-plane $\set {z \in \C : \map \Re z \le a + 1}$
Uniformly Continuous Function Preserves Uniform Convergence
$\blacksquare$


Sources
1973: John B. Conway: Functions of One Complex Variable ... (next) $\text {VII}$: Compact and Convergence in the Space of Analytic Functions: $\S 5$: Weierstrass Factorization Theorem: Lemma $5.7$




