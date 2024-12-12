# 

Source: https://proofwiki.org/wiki/Characterization_of_Affine_Transformations



Theorem
Let $\EE$ and $\FF$ be affine spaces over a field $K$.
Let $\LL: \EE \to \FF$ be a mapping.

Then $\LL$ is an affine transformation if and only if:

$\forall p, q \in \EE: \forall \lambda \in K: \map \LL {\lambda p + \paren {1 - \lambda} q} = \lambda \map \LL p + \paren {1 - \lambda} \map \LL q$
where $\lambda p + \paren {1 - \lambda} q$ and $\lambda \map \LL p + \paren {1 - \lambda} \map \LL q$ denote barycenters.


Proof
Sufficient Condition
Let $\LL$ be an affine transformation.
Let $L$ be the tangent map.
Let $r \in \EE$ be any point.
Then by definition we have:

$\lambda p + \paren {1 - \lambda} q = r + \lambda \vec{r p} + \paren {1 - \lambda} \vec{r q}$
Thus we find:














\(\ds \map \LL {\lambda p + \paren {1 - \lambda} q}\)

\(=\)







\(\ds \map \LL r + \map L {\lambda p + \paren {1 - \lambda} q}\)





Definition of Affine Transformation














\(\ds \)

\(=\)







\(\ds \map \LL r + \lambda \map L p + \paren {1 - \lambda} \map L q\)





since $L$ is linear














\(\ds \)

\(=\)







\(\ds \lambda \map \LL p + \paren {1 - \lambda} \map \LL q\)





Definition of Barycenter



$\Box$


Necessary Condition
Suppose that for all points $p, q \in \EE$ and all $\lambda \in \R$:

$\map \LL {\lambda p + \paren {1 - \lambda} q} = \lambda \map \LL p + \paren {1 - \lambda} \map \LL q$
Let $E$ be the difference space of $\EE$.
Fix a point $p \in \EE$, and define for all $u \in E$:

$\map L u = \map \LL {p + u} - \map \LL p$
Let $q = p + u$.
Then:

$\map \LL q = \map \LL p + \map L u$
So to show that $\LL$ is affine, we are required to prove that $L$ is linear.
That is, we want to show that for all $\lambda \in k$ and all $u, v \in E$:

$\map L {\lambda u} = \lambda \map L u$
and:

$\map L {u + v} = \map L u + \map L v$
First of all:














\(\ds \map L {\lambda u}\)

\(=\)







\(\ds \map \LL {p + \lambda u} - \map \LL p\)





Definition of $L$














\(\ds \)

\(=\)







\(\ds \map \LL {\paren {1 - \lambda} + \lambda \paren {p + u} }\)





Definition of Barycenter














\(\ds \)

\(=\)







\(\ds \paren {1 - \lambda} \map \LL p + \lambda \map \LL {p + u} - \map \LL p\)





by hypothesis on $\LL$














\(\ds \)

\(=\)







\(\ds \lambda \paren {\map \LL {p + u} - \map \LL p}\)




















\(\ds \)

\(=\)







\(\ds \lambda \map L u\)





Definition of $L$



Now it is to be shown that

$\map L {u + v} = \map L u + \map L v$
First:

$p + u + v = \dfrac 1 2 \paren {p + 2 u} + \dfrac 1 2 \paren {p + 2 v}$
Now:














\(\ds \map \LL {p + u + v}\)

\(=\)







\(\ds \map \LL {\frac 1 2 \paren {p + 2 u} + \frac 1 2 \paren {p + 2 v} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \LL {p + 2 u} + \frac 1 2 \map \LL {p + 2 v}\)





by hypothesis on $\LL$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\map \LL {p + 2 u} - \map \LL p} + \frac 1 2 \paren {\map \LL {p + 2 v} - \map \LL p} + \map \LL p\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map L {2 u} + \frac 1 2 \map L {2 v} + \map \LL p\)





Definition of $L$














\(\ds \)

\(=\)







\(\ds \map L u + \map L v + \map \LL p\)





as $L$ preserves scalar multiples



From the above calculation:

$\map L {u + v} = \map \LL {p + u + v} - \map \LL p = \map L u + \map L v$
This shows that $L$ is linear, and therefore concludes the proof.
$\blacksquare$





