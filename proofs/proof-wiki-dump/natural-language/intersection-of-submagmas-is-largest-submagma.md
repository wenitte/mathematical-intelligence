# 

Source: https://proofwiki.org/wiki/Intersection_of_Submagmas_is_Largest_Submagma

Theorem
Let $\struct {S, \odot}$ be a magma.
Let $\HH$ be a set of submagmas of $\struct {S, \odot}$, where $\HH \ne \O$.

Then the intersection $\bigcap \HH$ of the elements of $\HH$ is the largest submagma of $\struct {S, \odot}$ contained in each element of $\HH$.


Proof
Let $K = \bigcap \HH$.
Let $K_i$ be an arbitrary element of $\HH$.
Then:














\(\ds a, b\)

\(\in\)







\(\ds K\)














\(\ds \leadsto \ \ \)

\(\ds \forall i: \, \)



\(\ds a, b\)

\(\in\)







\(\ds K_i\)





Definition of Intersection of Set of Sets








\(\ds \leadsto \ \ \)

\(\ds \forall i: \, \)



\(\ds a \odot b\)

\(\in\)







\(\ds K_i\)





as $K_i$ is itself a magma, therefore $\odot$ is closed








\(\ds \leadsto \ \ \)





\(\ds a \odot b\)

\(\in\)







\(\ds K\)





Definition of Intersection of Set of Sets



That is, $\odot$ is closed in $K$.
Hence by definition $\struct {K, \odot}$ is a submagma of $\struct {S, \odot}$.
$\Box$

Now to show that $\struct {K, \odot}$ is the largest submagma of $\struct {S, \odot}$ contained in each element of $\HH$.
Let $N$ be a submagma of $\struct {S, \odot}$ such that:

$\forall H \in \HH: N \subseteq H$
Then by definition $N \subseteq K$.
Let $x, y \in N$.
Then:

$x \odot y \in N \implies x \odot y \in K$
Thus any submagma of all elements of $\HH$ is also a  submagma of $K$ and so no larger than $K$.
Thus $K = \bigcap \HH$ is the largest submagma of $H$ contained in each element of $\HH$.
$\blacksquare$





