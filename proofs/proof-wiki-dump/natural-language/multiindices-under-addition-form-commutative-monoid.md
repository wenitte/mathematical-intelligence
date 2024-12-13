# 

Source: https://proofwiki.org/wiki/Multiindices_under_Addition_form_Commutative_Monoid



Theorem
Let $Z$ be the set of multiindices.
Let $+$ denote the addition of multiindices.

Then $\left({Z, +}\right)$ is a commutative monoid.


Proof
We check each of the axioms in turn.
Let $k = \left \langle {k_j}\right \rangle_{j \in J}$, $\ell = \left \langle {\ell_j}\right \rangle_{j \in J}$ and $m = \left \langle {m_j}\right \rangle_{j \in J}$ be multiindices.


Closure
Trivially we have that:

$j \mapsto \left({ k_j + \ell_j }\right)$
is a sequence of integers indexed by $J$.
We know that finitely many of the $k_j$ are non-zero, and finitely many of the $\ell_j$ are non-zero.
Therefore finitely many of the $k_j + \ell_j$ are non-zero.
This shows that $k + \ell$ is a multiindex and so $+$ is closed.
$\Box$


Associativity
For all $j \in J$, we have:














\(\ds \left(\left(\ell + k\right) + m \right)_j\)

\(=\)







\(\ds \left(\ell + k\right)_j + m_j\)




















\(\ds \)

\(=\)







\(\ds \left(\ell_j + k_j\right) + m_j\)




















\(\ds \)

\(=\)







\(\ds \ell_j + \left(k_j + m_j\right)\)





by Integer Addition is Associative














\(\ds \)

\(=\)







\(\ds \ell_j + \left(k + m\right)_j\)




















\(\ds \)

\(=\)







\(\ds \left(\ell + \left(k + m\right) \right)_j\)









Thus $+$ is shown to be associative.
$\Box$


Commutativity
For all $j \in J$, we have:














\(\ds \left(\ell + k\right)_j\)

\(=\)







\(\ds \ell_j + k_j\)




















\(\ds \)

\(=\)







\(\ds k_j + \ell_j\)





By Integer Addition is Commutative














\(\ds \)

\(=\)







\(\ds \left(k + \ell\right)_j\)









Thus $+$ is shown to be commutative.
$\Box$


Identity Element
Let $0_Z$ be the multiindex defined by:

$\left(0_Z\right)_j = 0$
for all $j \in J$.
Then we have, for all $j \in J$:














\(\ds \left(0_Z + \ell\right)_j\)

\(=\)







\(\ds 0 + \ell_j\)




















\(\ds \)

\(=\)







\(\ds \ell_j\)









Since we have seen that $\left({Z, +}\right)$ is commutative, this shows that $0_Z$ is an identity element for $Z$.
$\blacksquare$





