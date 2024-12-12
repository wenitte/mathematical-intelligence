# 

Source: https://proofwiki.org/wiki/Cyclotomic_Polynomial_of_Index_times_Prime_Power

Theorem
Let $n, k \ge 1$ be natural numbers.
Let $p$ be a prime number.
Let $\Phi_n$ denote the $n$th cyclotomic polynomial.

Then $\map {\Phi_{p^k n}} x = \begin{cases}
\map {\Phi_n} {x^{p^k}} & \text{if } p \divides n\\
\dfrac {\map {\Phi_n} {x^{p^k}}} {\map {\Phi_n} {x^{p^{k - 1}}}} & \text{if } p \nmid n \end{cases}$


Proof
Suppose $p \divides n$.
Then for all $m \in \Z$:














\(\ds m \perp n\)

\(\implies\)







\(\ds m \perp n \land m \perp p\)





Law of Identity; Divisor of One of Coprime Numbers is Coprime to Other














\(\ds \)

\(\implies\)







\(\ds m \perp p^k n\)





Integer Coprime to all Factors is Coprime to Whole














\(\ds \)

\(\implies\)







\(\ds m \perp n\)





Divisor of One of Coprime Numbers is Coprime to Other








\(\ds \leadsto \ \ \)





\(\ds m \perp p^k n\)

\(\iff\)







\(\ds m \perp n\)





Definition of Biconditional



Hence:














\(\ds \map {\Phi_{p^k n} } x\)

\(=\)







\(\ds \prod_{\zeta} \paren {x - \zeta}\)





where the product runs over all primitive complex $p^k n$th roots of unity














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le m \mathop \le p^k n \\ \gcd \set {m, p^k n} = 1} } \paren {x - \map \exp {\frac {2 \pi i m} {p^k n} } }\)





Condition for Complex Root of Unity to be Primitive














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le m \mathop \le p^k n \\ \gcd \set {m, n} = 1} } \paren {x - \map \exp {\frac {2 \pi i m} {p^k n} } }\)





as $m \perp p^k n \iff m \perp n$














\(\ds \)

\(=\)







\(\ds \prod_{q \mathop = 0}^{p^k - 1} \prod_{\substack {1 \mathop \le r \mathop \le n \\ \gcd \set {q n + r, n} = 1} } \paren {x - \map \exp {\frac {2 \pi i \paren {q n + r} } {p^k n} } }\)





Writing $m = q n + r$ by Division Theorem














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le r \mathop \le n \\ \gcd \set {r, n} = 1} } \prod_{q \mathop = 0}^{p^k - 1} \paren {x - \map \exp {\frac {2 \pi i} {p^k} }^q \map \exp {\frac {2 \pi i r} {p^k n} } }\)





rearranging; GCD with Remainder














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le r \mathop \le n \\ \gcd \set {r, n} = 1} } \paren {x^{p^k} - \map \exp {\frac {2 \pi i r} n} }\)





Factorisation of $z^n - a$














\(\ds \)

\(=\)







\(\ds \prod_{\zeta} \paren {x^{p^k} - \zeta}\)





where the product runs over all primitive complex $n$th roots of unity; Condition for Complex Root of Unity to be Primitive














\(\ds \)

\(=\)







\(\ds \map {\Phi_n} {x^{p^k} }\)





Definition of Cyclotomic Polynomial



$\Box$

Now suppose $p \nmid n$.
We still have $p \divides p n$.
Write $p^k = p^{k - 1} p n$.
Notice that the result we proved above holds trivially for $k = 0$:

$\map {\Phi_{p^0 n} } x = \map {\Phi_n } x = \map {\Phi_n } {x^1} = \map {\Phi_n } {x^{p^0}}$
Hence from the above:

$\map {\Phi_{p^k n} } x = \map {\Phi_{p n}} {x^{p^{k - 1}}}$

We need the following result:

the sets $\set {m \in \Z: m \perp p n}$ and $\set {p r: r \perp n}$ are disjoint and has union $\set {m \in \Z: m \perp n}$

First to show that they are indeed disjoint:
Suppose $x \in \set {p r: r \perp n}$.
Then $p \divides x$.
Since $p \divides p n$:

$x \not \perp p n$
and thus:

$x \notin \set {m \in \Z: m \perp p n}$
Hence the sets are disjoint.

Now we show that their union is indeed $\set {m \in \Z: m \perp n}$.
By Divisor of One of Coprime Numbers is Coprime to Other:

$\forall m \in \Z: m \perp p n \implies \paren {m \perp p \land m \perp n}$
This gives:

$\set {m \in \Z: m \perp p n} \subseteq \set {m \in \Z: m \perp n}$
Let $x \in \set {p r: r \perp n}$.
We are given that $p \perp n$.
By Integer Coprime to all Factors is Coprime to Whole:

$x \perp n$
Hence $x \in \set {m \in \Z: m \perp n}$.
This gives:

$\set {p r: r \perp n} \subseteq \set {m \in \Z: m \perp n}$
By Union of Subsets is Subset:

$\set {m \in \Z: m \perp p n} \cup \set {p r: r \perp n} \subseteq \set {m \in \Z: m \perp n}$

For the other direction, we let $x \notin \set {m \in \Z: m \perp p n} \cup \set {p r: r \perp n}$.
Then by De Morgan's Laws (Set Theory)/Set Complement:

$x \in \set {m \in \Z: m \not \perp p n} \cap \set {p r: r \not \perp n}$.
By definition of intersection:

$x \in \set {p r: r \not \perp n}$
Thus:

$\exists d \in \Z: d > 1: d \divides r \divides x \land d \divides n$
Therefore $x \not \perp n$.
This gives:

$x \notin \set {m \in \Z: m \perp n}$
Hence:

$\set {m \in \Z: m \perp n} \subseteq \set {m \in \Z: m \perp p n} \cup \set {p r: r \perp n}$
and we have our result by definition of set equality.

Therefore:














\(\ds \map {\Phi_{p n} } {x^{p^{k - 1} } }\)

\(=\)







\(\ds \prod_{\zeta} \paren {x^{p^{k - 1} } - \zeta}\)





where the product runs over all primitive complex $p n$th roots of unity














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le m \mathop \le p n \\ m \mathop \perp p n} } \paren {x^{p^{k - 1} } - \map \exp {\frac {2 \pi i m} {p n} } }\)





Condition for Complex Root of Unity to be Primitive














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le m \mathop \le p n \\ m \mathop \perp n} } \paren {x^{p^{k - 1} } - \map \exp {\frac {2 \pi i m} {p n} } } / \prod_{\substack {1 \mathop \le p r \mathop \le p n \\ \gcd \set {r, n} = 1} } \paren {x^{p^{k - 1} } - \map \exp {\frac {2 \pi i m} {p n} } }\)





from above














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le m \mathop \le p n \\ m \mathop \perp n} } \paren {x^{p^{k - 1} } - \map \exp {\frac {2 \pi i m} {p n} } } / \prod_{\zeta} \paren {x^{p^k} - \zeta}\)





where the product runs over all primitive complex $n$th roots of unity; Condition for Complex Root of Unity to be Primitive














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le m \mathop \le p n \\ m \mathop \perp n} } \paren {x^{p^{k - 1} } - \map \exp {\frac {2 \pi i m} {p n} } } / \map {\Phi_n} {x^{p^{k - 1} } }\)





Definition of Cyclotomic Polynomial














\(\ds \)

\(=\)







\(\ds \prod_{q \mathop = 0}^{p - 1} \prod_{\substack {1 \mathop \le r \mathop \le n \\ \gcd \set {q n + r, n} = 1} } \paren {x^{p^{k - 1} } - \map \exp {\frac {2 \pi i \paren {q n + r} } {p n} } } / \map {\Phi_n} {x^{p^{k - 1} } }\)





Writing $m = q n + r$ by Division Theorem














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le r \mathop \le n \\ \gcd \set {r, n} = 1} } \prod_{q \mathop = 0}^{p - 1} \paren {x^{p^{k - 1} } - \map \exp {\frac {2 \pi i} p}^q \map \exp {\frac {2 \pi i r} {p n} } } / \map {\Phi_n} {x^{p^{k - 1} } }\)





rearranging; GCD with Remainder














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le r \mathop \le n \\ \gcd \set {r, n} = 1} } \paren {x^{p^k} - \map \exp {\frac {2 \pi i r} n} } / \map {\Phi_n} {x^{p^{k - 1} } }\)





Factorisation of $z^n - a$














\(\ds \)

\(=\)







\(\ds \prod_{\zeta} \paren {x^{p^k} - \zeta} / \map {\Phi_n} {x^{p^{k - 1} } }\)





where the product runs over all primitive complex $n$th roots of unity; Condition for Complex Root of Unity to be Primitive














\(\ds \)

\(=\)







\(\ds \map {\Phi_n} {x^{p^k} } / \map {\Phi_n} {x^{p^{k - 1} } }\)





Definition of Cyclotomic Polynomial



as required.
$\blacksquare$





