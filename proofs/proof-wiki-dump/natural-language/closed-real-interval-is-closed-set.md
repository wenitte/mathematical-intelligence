# 

Source: https://proofwiki.org/wiki/Closed_Real_Interval_is_Closed_Set

Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $\closedint a b \subset \R$ be a closed interval of $\R$.

Then $\closedint a b$ is a closed set of $\R$.


Proof













\(\ds \closedint a b\)

\(=\)







\(\ds \set {x \in \R: x \ge a \land x \le b}\)





Definition of Closed Real Interval








\(\ds \leadsto \ \ \)





\(\ds \R \setminus \closedint a b\)

\(=\)







\(\ds \R \setminus \set {x \in \R: x \ge a \land x \le b}\)




















\(\ds \)

\(=\)







\(\ds \set {x \in \R: x < a \lor x > b}\)





De Morgan's Laws: Disjunction of Negations














\(\ds \)

\(=\)







\(\ds \openint {-\infty} a \cup \openint b \infty\)





Definition of Open Real Interval



From the corollary to Open Real Interval is Open Set, both $\openint {-\infty} a$ and $\openint b \infty$ are open sets in $M$.
From Union of Open Sets of Metric Space is Open it follows that $\openint {-\infty} a \cup \openint b \infty$ is open in $\R$.
But $\openint {-\infty} a \cup \openint b \infty$ is the relative complement of $\closedint a b$ in $\R$.
The result follows by definition of closed set.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Compactness
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Examples $3.7.2$
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.3$: Normed and Banach spaces. Topology of normed spaces




