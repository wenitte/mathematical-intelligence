# 

Source: https://proofwiki.org/wiki/Bijection_between_Integers_and_Even_Integers

Theorem
Let $\Z$ be the set of integers.
Let $2 \Z$ be the set of even integers.

Then there exists a bijection $f: \Z \to 2 \Z$ between the two.


Proof
Let $f: \Z \to 2 \Z$ be the mapping defined as:

$\forall n \in \Z: \map f n = 2 n$
Let $m, n \in \Z$ such that $\map f m = \map f n$.














\(\ds \map f m\)

\(=\)







\(\ds \map f n\)














\(\ds \leadsto \ \ \)





\(\ds 2 m\)

\(=\)







\(\ds 2 n\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds n\)





dividing both sides by $2$



Thus $f$ is an injection.

Let $n \in 2 Z$.
Then by definition:

$n = 2 r$
for some $r \in \Z$
That is:

$n = \map f r$
and so $f$ is a surjection.

So $f$ is both an injection and a surjection.
Hence by definition, $f$ is a bijection.
$\blacksquare$





