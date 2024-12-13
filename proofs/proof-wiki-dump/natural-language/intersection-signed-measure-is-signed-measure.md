# 

Source: https://proofwiki.org/wiki/Intersection_Signed_Measure_is_Signed_Measure

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$. 
Let $F \in \Sigma$.
Let $\mu_F$ be the intersection signed measure of $\mu$ by $F$.

Then $\mu_F$ is a signed measure.


Proof
Since $\mu$ is a signed measure it takes values in either $\overline \R \setminus \set \infty$ or $\overline \R \setminus \set {-\infty}$.
That is: 

$\map \mu E \in \overline \R \setminus \set \infty$ for each $E \in \Sigma$
or:

$\map \mu E \in \overline \R \setminus \set {-\infty}$ for each $E \in \Sigma$.
In particular: 

$\map {\mu_F} E = \map \mu {E \cap F} \in \overline \R \setminus \set \infty$ for each $E \in \Sigma$
or:

$\map {\mu_F} E = \map \mu {E \cap F} \in \overline \R \setminus \set {-\infty}$ for each $E \in \Sigma$.
Now we verify the two conditions required of a signed measure.
We have: 














\(\ds \map {\mu_F} \O\)

\(=\)







\(\ds \map \mu {F \cap \O}\)





Definition of Intersection Signed Measure














\(\ds \)

\(=\)







\(\ds \map \mu \O\)





Intersection with Empty Set














\(\ds \)

\(=\)







\(\ds 0\)





Definition of Signed Measure



Now let $\sequence {S_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint sets in $\Sigma$.
Then, we have: 














\(\ds \map {\mu_F} {\bigcup_{n \mathop = 1}^\infty S_n}\)

\(=\)







\(\ds \map \mu {F \cap \bigcup_{n \mathop = 1}^\infty S_n}\)





Definition of Intersection Signed Measure














\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop = 1}^\infty \paren {F \cap S_n} }\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map \mu {F \cap S_n}\)





using countable additivity of $\mu$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\mu_F} {S_n}\)





Definition of Intersection Signed Measure



So $\mu$ is a signed measure.
$\blacksquare$





