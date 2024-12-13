# 

Source: https://proofwiki.org/wiki/Lebesgue%27s_Number_Lemma/Sequentially_Compact_Space

  This article was Featured Proof between 28 March 2009 and 1 April 2009.


Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $M$ be sequentially compact.

Then there exists a Lebesgue number for every open cover of $M$.


Proof
Aiming for a contradiction, suppose $\UU$ is an open cover of $M$ for which no Lebesgue number exists.
Then for any $n \in \N$, there exists some $x_n \in M$ such that $\map {B_{1 / n} } {x_n} \subseteq U$ is false for each $U \in \UU$. (Otherwise $1/n$ would be a Lebesgue number for $\UU$.)
As $M$ is sequentially compact, $\sequence {x_n}$ has a subsequence, say $\sequence {x_{\map n r} }$ which converges to some $x \in M$.
Since $\UU$ covers $M$, $x \in U_0$ for some $U_0 \in \UU$.
Since $U_0$ is open, $\exists m \in \N: \map {B_{2 / m} } x \subseteq U_0$.
Now $\map {B_{1 / m} } x$ contains $x_{\map n r}$ for all $r \ge R$, say.
Choose $r \ge R$ such that $\map n r \ge m$ and write $s = \map n r$.
Then $\map {B_{1 / s} } {x_s} \subseteq \map {B_{2 / m} } x$ since:














\(\ds \map d {x_s, y}\)

\(<\)







\(\ds \frac 1 s\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x, y}\)

\(\le\)







\(\ds \map d {x, x_s} + \map d {x_s, y}\)




















\(\ds \)

\(<\)







\(\ds \frac 1 m + \frac 1 s\)




















\(\ds \)

\(\le\)







\(\ds \frac 2 m\)









So $\map {B_{1 / s} } {x_s} \subseteq U_0$ which contradicts the choice of $x_s$.
So, by Proof by Contradiction, there has to be a Lebesgue number for $\UU$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $7.2$: Sequential compactness: Lemma $7.2.12$




