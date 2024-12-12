# 

Source: https://proofwiki.org/wiki/Bolzano-Weierstrass_Theorem/Lemma_0



Lemma for Bolzano-Weierstrass Theorem
Let $S' \subseteq S \subseteq \R$.
Then every limit point of $S'$ is a limit point of $S$.


Proof
Consider an arbitrary limit point $l$ of $S'$.
Fix $\epsilon \in \R_{>0}$.
By definition of limit point:

$\paren {\map {B_\epsilon} l \setminus \set l} \cap S' \ne \O$
where $\map {B_\epsilon} l$ denotes the open $\epsilon$-ball of $l$.
Thus there exists a real $s_\epsilon$ in both $\map {B_\epsilon} l \setminus \set l$ and $S'$.
But since $S' \subseteq S$, $s_\epsilon \in S'$ implies $s_\epsilon \in S$.
So, in other words, $s_\epsilon$ is in both $\map {B_\epsilon} l \setminus \set l$ and $S$.
That is:

$\paren {\map {B_\epsilon} l \setminus \set l} \cap S \ne \O$
This is exactly what it means for $l$ to be a limit point of $S$.
As $l$ is arbitrary, this result is true for every limit point $l$ of $S'$.
$\blacksquare$


Also known as
Some sources refer to the Bolzano-Weierstrass Theorem as the Weierstrass-Bolzano Theorem.
It is also known as Weierstrass's Theorem, but that name is also applied to a completely different result.


Source of Name
This entry was named for Bernhard Bolzano and Karl Weierstrass.





