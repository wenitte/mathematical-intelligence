# 

Source: https://proofwiki.org/wiki/Bolzano-Weierstrass_Theorem/Lemma_1



Lemma for Bolzano-Weierstrass Theorem
Let $S$ be a non-empty subset of the real numbers such that its supremum $\map \sup S$ exists.
Let $\map \sup S \notin S$.
Then $\map \sup S$ is a limit point of $S$.


Proof
Aiming for a contradiction, suppose $\map \sup S$ is not a limit point of $S$.
By the negation of the definition of a limit point, there is an $\epsilon \in \R_{>0}$ such that:

$\paren {\map {B_\epsilon} {\map \sup S} \setminus \set {\map \sup S} } \cap S = \O$
Since $\map \sup S \notin S$, adding back $\map \sup S$ to $\map {B_\epsilon} {\map \sup S} \setminus \set {\map \sup SS}$ still gives an empty intersection with $S$.
That is:

$\map {B_\epsilon} {\map \sup S} \cap S = \openint {\map \sup S - \epsilon} {\map \sup S + \epsilon} \cap S = \O$
So, since $\openint {\map \sup S - \epsilon} {\map \sup S} \subset \openint {\map \sup S - \epsilon} {\map \sup S + \epsilon}$, we also have:

$\openint {\map \sup S - \epsilon} {\map \sup S} \cap S = \O$
Now, because $\epsilon > 0$, $\openint {\map \sup S - \epsilon} {\map \sup S}$ is non-empty.
So, there is a real $r$ such that $\map \sup S - \epsilon < r < \map \sup S$.
This $r$ is an upper bound on $S$.

We show this as follows:
Note that for any $s \in S$:

$s < \map \sup S$
Suppose:

$\map \sup S - \epsilon < s < \map \sup S$
Then:

$s \in \openint {\map \sup S - \epsilon} {\map \sup S}$
This contradicts what we established earlier: that $\openint {\map \sup S - \epsilon} {\map \sup S}$ cannot have an element of $S$.
That is, $r$ is an upper bound on $S$.

Hence we finally have that:

$s \le \map \sup S - \epsilon < r < \map \sup S$
which makes $r$ a lower upper bound on $S$ than $\map \sup S$.
This contradicts the Continuum Property of $\map \sup S$.
Hence by Proof by Contradiction it must be the case that $\map \sup S$ is a limit point of $S$.
$\blacksquare$


Also known as
Some sources refer to the Bolzano-Weierstrass Theorem as the Weierstrass-Bolzano Theorem.
It is also known as Weierstrass's Theorem, but that name is also applied to a completely different result.


Source of Name
This entry was named for Bernhard Bolzano and Karl Weierstrass.





