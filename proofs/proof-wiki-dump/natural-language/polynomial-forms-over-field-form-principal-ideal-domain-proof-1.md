# 

Source: https://proofwiki.org/wiki/Polynomial_Forms_over_Field_form_Principal_Ideal_Domain/Proof_1

Theorem
Let $\struct {F, +, \circ}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Let $X$ be transcendental over $F$.
Let $F \sqbrk X$ be the ring of polynomials in $X$ over $F$.

Then $F \sqbrk X$ is a principal ideal domain.


Proof
For any $d \in F \sqbrk X$, let $\ideal d$ denote the principal ideal of $F \sqbrk X$ generated by $d$.

Let $J$ be any ideal of $F \sqbrk X$. What we need to prove is that $J$ is a principal ideal.
Let us first distinguish the following two cases for $J$:

If $J = \set {0_F}$, then by Zero Element Generates Null Ideal $J = \ideal {0_F}$, and hence is a principal ideal.
If $J = F \sqbrk X$, then by Ideal of Unit is Whole Ring: Corollary $J = \ideal {1_F}$, and hence is a principal ideal.

Now suppose $J \ne \set {0_F}$ and $J \ne F \sqbrk X$.
Then $J$ necessarily contains a non-zero element.
By the Well-Ordering Principle, we can introduce the lowest degree of a non-zero element of $J$.
Denote this degree by $n$.

If $n = 0$, then $J$ contains a polynomial of degree $0$.
This is a non-zero element of $F$.
As $F$ is a field, this is therefore a unit of $F$, and thus by Ideal of Unit is Whole Ring, $J = F \sqbrk X$.
Because the degree of a non-zero element is a natural number, we conclude that $n \ge 1$.

Now let $d$ be a polynomial of degree $n$ in $J$, and let $f \in J$.
By Division Theorem for Polynomial Forms over Field, $f = q \circ d + r$ for some $q, r \in F \sqbrk X$ where either:

$r = 0_F$
or:

$r$ is a polynomial of degree smaller than $n$.
Because $J$ is an ideal and $d \in J$, it follows that:

$q \circ d \in J$
Since $f \in J$, we also conclude:

$r = f - q \circ d \in J$
From the construction of $d$, it follows that we must have $r = 0_F$.
Therefore:

$f = q \circ d$
and thus:

$f \in \ideal d$.

This reasoning shows that:

$J \subseteq \ideal d$
From property $(3)$ of the principal ideal $\ideal d$, we conclude that:

$\ideal d \subseteq J$
as $d \in J$.
Hence $J = \ideal d$.

These $2$ distinguished cases cover all of the possible ideals of $F \sqbrk X$. 
Hence $F \sqbrk X$ is a principal ideal domain.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 65.2$ Some properties of $F \sqbrk X$, where $F$ is a field



