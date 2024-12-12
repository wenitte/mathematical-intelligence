# 

Source: https://proofwiki.org/wiki/User:Fake_Proof/Sandbox/Uniform_Limit_Theorem

Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $\struct {M, d}$ be a metric space.
Let $\sequence {f_n}_{n \mathop \in \N}$ be a sequence of mappings from $S$ to $M$ such that:

$(1): \quad \forall n \in \N: f_n$ is continuous at every point of $S$
$(2): \quad \sequence {f_n}$ converges uniformly to $f$

Then $f$ is continuous at every point of $S$.


Proof
Let $a \in S$.
Let $V$ be a neighborhood of $\map f a$ in $\struct {M, d}$.

Then there exists $\epsilon \in \R_{>0}$ such that:

$(3): \quad \map {B_\epsilon} {\map f a} \subseteq V$
where $\map {B_\epsilon} {\map f a}$ denotes the open $\epsilon$-ball of $\map f a$ in $\struct {M, d}$.

From $(1)$, there exists a sequence $\sequence {U_n}_{n \mathop \in \N}$ of neighborhoods of $a$ in $\struct {S, \tau}$ such that:

$(4): \quad \forall n \in \N: \forall x \in U_n: \map d {\map {f_n} x, \map {f_n} a} < \dfrac \epsilon 3$

From $(2)$, there exists $N \in \R_{>0}$ such that:




\(\text {(5 a)}: \quad\)





\(\ds \forall n \in \N_{>N}: \forall x \in S: \, \)



\(\ds \map d {\map f x, \map {f_n} x}\)

\(<\)







\(\ds \frac \epsilon 3\)










\(\text {(5 b)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N_{>N}: \, \)



\(\ds \map d {\map f a, \map {f_n} a}\)

\(<\)







\(\ds \frac \epsilon 3\)





Universal Instantiation of $x$




Then:










\(\ds \forall n \in N_{>N}: \forall x \in U_n: \, \)



\(\ds \map d {\map f x, \map f a}\)

\(\le\)







\(\ds \map d {\map f x, \map {f_n} x} + \map d {\map {f_n} x, \map {f_n} a} + \map d {\map {f_n} a, \map f a}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map d {\map f x, \map {f_n} x} + \map d {\map {f_n} x, \map {f_n} a} + \map d {\map f a, \map {f_n} a}\)





Metric Space Axiom $(\text M 3)$














\(\ds \)

\(<\)







\(\ds \frac \epsilon 3 + \frac \epsilon 3 + \frac \epsilon 3\)





from $(4)$, $(\text {5 a})$ and $(\text {5 b})$














\(\ds \)

\(=\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N_{>N}: \, \)



\(\ds f \sqbrk {U_n}\)

\(\subseteq\)







\(\ds \map {B_\epsilon} {\map f a}\)





Definition of Image of Subset under Mapping, Definition of Open Ball














\(\ds \)

\(\subseteq\)







\(\ds V\)





from $(3)$




Hence $f$ is continuous at every point of $S$.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): Theorem $21.6$
2005: G. Auliac and J.-Y. Caby: Mathématiques, Topologie et Analyse: $\S 5.2$, Theorem $5.10$




