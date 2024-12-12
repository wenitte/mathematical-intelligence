# 

Source: https://proofwiki.org/wiki/Characterization_of_Canonical_Preordering_of_Projections_on_Hilbert_Space



Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$. 
Let $\map B \HH$ be the space of bounded linear operators on $\HH$ understood as a $\text C^\ast$-algebra.
Let $\le_{\map B \HH}$ be the canonical preordering of $\map B \HH$.
Let $P, Q$ be Hilbert space projections on $\HH$.

The following statements are equivalent:

$(1) \quad$ $P \le_{\map B \HH} Q$
$(2) \quad$ $P Q = P$
$(3) \quad$ $Q P = P$
$(4) \quad$ $\Img P \subseteq \Img Q$
$(5) \quad$ for all $x \in \HH$ we have $\norm {P x} \le \norm {Q x}$
$(6) \quad$ $Q - P$ is a Hilbert space projection


Proof
We first note that from Characterization of Projections, $P$ is Hermitian, and that $P, Q$ is are orthogonal projections onto $\Img P$ and $\Img Q$ respectively.

$(2)$ is equivalent to $(3)$
From Adjoint is Involutive:

$P Q = P$
is equivalent to:

$\paren {P Q}^\ast = P^\ast = P$
From Adjoint of Composition of Linear Transformations is Composition of Adjoints, we have:

$\paren {P Q}^\ast = Q P$
So:

$P Q = P$ if and only if $Q P = P$
$\Box$

$(3)$ implies $(4)$
Suppose that:

$Q P = P$
Then for $x \in \Img P$, we have $P x = x$ from Fixed Points of Orthogonal Projection.
Then $\map {Q P} x = Q x = x$. 
So $x \in \Img Q$. 
Hence we get $\Img P \subseteq \Img Q$. 
$\Box$

$(4)$ implies $(3)$
Suppose that:

$\Img P \subseteq \Img Q$
Then for $x \in \HH$, we have $P x \in \Img Q$.
From Fixed Points of Orthogonal Projection, we then have $Q P x = P x$. 
So $Q P = P$. 
$\Box$

$(2)$ implies $(6)$
Suppose that: 

$P Q = P$
Since $(2)$ implies $(3)$, we have $Q P = P$
Then we have:

$\paren {Q - P}^2 = \paren {Q - P} \paren {Q - P} = Q^2 - PQ - QP + P^2$
Since $Q$ and $P$ are idempotent, we have $Q^2 = Q$ and $P^2 = P$.
Since $P Q = P$ and $Q P = P$, we have $-PQ - QP + P = P$. 
So we have:

$\paren {Q - P}^2 = Q - P$
Further:

$\paren {Q - P}^\ast = Q - P$
from Adjoining is Linear. 
So from Characterization of Projections, we have that $Q - P$ is a Hilbert space projection.
$\Box$

$(6)$ implies $(1)$
Suppose that $Q - P$ is a Hilbert space projection.
From Hilbert Space Projection is *-Algebra Projection, $Q - P$ is a $\ast$-algebra projection.
From Spectrum of Projection in *-Algebra, $\map \sigma {Q - P} \subseteq \set {0, 1}$. 
So $Q - P$ is positive.
We hence obtain $P \le_{\map B \HH} Q$.
$\Box$

$(1)$ implies $(5)$
Suppose that $P \le_{\map B \HH} Q$. 
Then $Q - P$ is positive .
From Existence and Uniqueness of Positive Nth Root of Positive Element of C*-Algebra, there exists a positive linear transformation $S : \HH \to \HH$ such that:

$Q - P = S^2$
We then have for $x \in \HH$:














\(\ds \norm {Q x}^2 - \norm {P x}^2\)

\(=\)







\(\ds \innerprod {Q x} {Q x} - \innerprod {P x} {P x}\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {Q^2 x} x - \innerprod {P^2 x} x\)





since $P, Q$ are Hermitian














\(\ds \)

\(=\)







\(\ds \innerprod {Q x} x - \innerprod {P x} x\)





Definition of Idempotent Operator














\(\ds \)

\(=\)







\(\ds \innerprod {\paren {Q - P} x} x\)




















\(\ds \)

\(=\)







\(\ds \innerprod {S^2 x} x\)




















\(\ds \)

\(=\)







\(\ds \innerprod {S x} {S x}\)





$S$ is Hermitian














\(\ds \)

\(=\)







\(\ds \norm {S x}^2\)





Definition of Inner Product Norm














\(\ds \)

\(\ge\)







\(\ds 0\)









So we have:

$\norm {P x}^2 \le \norm {Q x}^2$
giving:

$\norm {P x} \le \norm {Q x}$
$\Box$

$(5)$ implies $(2)$
Suppose that:

$\norm {P x} \le \norm {Q x}$ for each $x \in \HH$.
We then have, for each $x \in \HH$:

$\norm {P \paren {1 - Q} x} \le \norm {Q \paren {1 - Q} x} = \norm {\paren {Q^2 - Q} x} = 0$
since $Q^2 = Q$.
So we have from Norm Axiom $\text N 1$: Positive Definiteness:

$P \paren {1 - Q} x = {\mathbf 0}_\HH$
so:

$P x = P Q x$ for each $x \in \HH$.
So we can conclude $P = P Q$.
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $2.1$: $C^\ast$-Algebras




