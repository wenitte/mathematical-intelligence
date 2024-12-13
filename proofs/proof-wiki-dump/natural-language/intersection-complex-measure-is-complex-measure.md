# 

Source: https://proofwiki.org/wiki/Intersection_Complex_Measure_is_Complex_Measure

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a complex measure on $\struct {X, \Sigma}$. 
Let $F \in \Sigma$.
Let $\mu_F$ be the intersection complex measure of $\mu$ by $F$.

Then $\mu_F$ is a complex measure.


Proof
Since $\mu$ is a complex measure, we have: 

$\map \mu E \in \C$
for each $E \in \Sigma$.
So, in particular: 

$\map \mu {E \cap F} \in \C$
for all $E \in \Sigma$.
That is: 

$\map {\mu_F} E \in \C$
for all $E \in \Sigma$. 
We verify the two conditions required of a complex measure.
We have:














\(\ds \map {\mu_F} \O\)

\(=\)







\(\ds \map \mu {F \cap \O}\)





Definition of Intersection Complex Measure














\(\ds \)

\(=\)







\(\ds \map \mu \O\)





Intersection with Empty Set














\(\ds \)

\(=\)







\(\ds 0\)





since $\mu$ is a complex measure



Now let $\sequence {S_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint sets in $\Sigma$.
Then, we have: 














\(\ds \map {\mu_F} {\bigcup_{n \mathop = 1}^\infty S_n}\)

\(=\)







\(\ds \map \mu {F \cap \bigcup_{n \mathop = 1}^\infty S_n}\)





Definition of Intersection Complex Measure














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





Definition of Intersection Complex Measure



So $\mu$ is a complex measure.
$\blacksquare$





