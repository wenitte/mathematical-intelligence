# 

Source: https://proofwiki.org/wiki/Division_Theorem_for_Polynomial_Forms_over_Field/Proof_3



Theorem
Let $\struct {F, +, \circ}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Let $X$ be transcendental over $F$.
Let $F \sqbrk X$ be the ring of polynomials in $X$ over $F$.
Let $d$ be an element of $F \sqbrk X$ of degree $n \ge 1$.

Then $\forall f \in F \sqbrk X: \exists q, r \in F \sqbrk X: f = q \circ d + r$ such that either:

$(1): \quad r = 0_F$
or:

$(2): \quad r \ne 0_F$ and $r$ has degree that is less than $n$.


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\forall f \in F \sqbrk X: \exists q, r \in F \sqbrk X: f = q \circ d + r$ provided that $\map \deg f < n$


Basis for the Induction
$\map P 0$ is the statement that $q$ and $r$ exist when $f = 0$.
This is shown trivially to be true by taking $q = r = 0$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\forall f \in F \sqbrk X: \exists q, r \in F \sqbrk X: f = q \circ d + r$ provided that $\map \deg f < k$

Then we need to show:

$\forall f \in F \sqbrk X: \exists q, r \in F \sqbrk X: f = q \circ d + r$ provided that $\map \deg f < k + 1$


Induction Step
This is our induction step:
Let $f$ be such that $\map \deg f = n$.
Let:

$f = a_0 + a_1 \circ x + a_2 \circ x^2 + \cdots + a_n \circ x^n$ where $a_n \ne 0$
Let:

$d = b_0 + b_1 \circ x + b_2 \circ x^2 + \cdots + b_j \circ x^j$ where $b_j \ne 0$
If $n < l$ then take $q = 0, r = f$.
If $n \ge l$, consider:

$c := f - a_n b_j^{-1} x^{n - j} d$
This has been carefully arranged so that the coefficient of $x^n$ in $c$ is zero.
Thus $\map \deg c < n$.
Therefore, by the induction hypothesis:

$c = d q_0 + r$
where $\map \deg r < \map \deg d$.
Therefore:














\(\ds f\)

\(=\)







\(\ds d \paren {q_0 + a_n b_j^{-1} x^{n - j} } + r\)




















\(\ds \)

\(=\)







\(\ds d q + r\)





where $\map \deg r < \map \deg d$ and $q = q_0 + a_n b_j^{-1} x^{n - j}$



Thus the existence of $q$ and $r$ have been established.

As for uniqueness, assume:

$d q + r = d q' + r'$
with $\map \deg r < \map \deg d, \map \deg {r'} < \map \deg d$
Then:

$d \paren {q - q'} = r' - r$
By Degree of Sum of Polynomials:

$\map \deg {r' - r} \le \max \set {\map \deg {r'}, \map \deg r} < \map \deg d$
and by Degree of Product of Polynomials over Integral Domain:

$\map \deg {d \paren {q - q'} } = \map \deg d + \map \deg {q - q'}$
That is:

$\map \deg d < \map \deg d + \map \deg {q - q'}$
and the only way for that to happen is for:

$\map \deg {q - q'} = -\infty$
that is, for $q - q'$ to be the null polynomial.
That is, $q - q' = 0_F$ and by a similar argument $r' - r = 0_F$, demonstrating the uniqueness of $q$ and $r$.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall f \in F \sqbrk X: \exists q, r \in F \sqbrk X: f = q \circ d + r$ such that either:
$(1): \quad r = 0_F$
or:
$(2): \quad r \ne 0_F$ and $r$ has degree that is less than $n$.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 3.2$: Polynomial rings: Lemma $3.8$




