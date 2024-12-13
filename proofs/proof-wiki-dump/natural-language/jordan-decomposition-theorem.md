# 

Source: https://proofwiki.org/wiki/Jordan_Decomposition_Theorem



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$.
Let $\tuple {P, N}$ be a Hahn decomposition of $\mu$. 

Then there exists measures $\mu^+$ and $\mu^-$ on $\struct {X, \Sigma}$ such that: 

$\mu = \mu^+ - \mu^-$
Further, at least one of $\mu^+$ and $\mu^-$ is finite.


Proof
From the definition of a Hahn decomposition, the set $P$ is $\mu$-positive, the set $N$ is $\mu$-negative and: 

$X = P \cup N$
with $P$ and $N$ disjoint.
From Sigma-Algebra Closed under Countable Intersection, we have: 

$A \cap P \in \Sigma$
and:

$A \cap N \in \Sigma$
for each $A \in \Sigma$.
Now, for each $A \in \Sigma$, define: 

$\map {\mu^+} A = \map \mu {A \cap P}$
and:

$\map {\mu^-} A = -\map \mu {A \cap N}$
We verify that $\mu^+$ and $\mu^-$ are indeed measures by first showing that they are signed measures.

Lemma
$\mu^+$ and $\mu^-$ are signed measures.
$\Box$

We show that these are in fact measures by showing that $\mu^+ \ge 0$ and $\mu^- \ge 0$. 
From Intersection is Subset, we have: 

$A \cap P \subseteq P$
Since $P$ is a $\mu$-positive set, we have:

$\map \mu {A \cap P} \ge 0$
for each $A \in \Sigma$. 
From Intersection is Subset, we have: 

$A \cap N \subseteq N$
Since $N$ is a $\mu$-negative set, we have: 

$\map \mu {A \cap N} \le 0$
for each $A \in \Sigma$.
So:

$\map {\mu^+} A \ge 0$
and:

$\map {\mu^-} A \ge 0$
for each $A \in \Sigma$.
So, from Non-Negative Signed Measure is Measure, we have: 

$\mu^+$ and $\mu^-$ are measures.

We now verify that at least one of the measures are finite. 
From Intersection with Subset is Subset, we have: 

$\map {\mu^+} X = \map \mu {X \cap P} = \map \mu P$
and:

$\map {\mu^-} X = -\map \mu {X \cap N} = -\map \mu N$
From the definition of a finite measure, we show that either: 

$\map \mu P < \infty$
or:

$-\map \mu N < \infty$
Since $\mu$ is countably additive, we have that: 

$\map \mu X = \map \mu P + \map \mu N$
From Set is Subset of Itself, we have: 

$P \subseteq P$
so, since $P$ is $\mu$-positive, we have: 

$\map \mu P \ge 0$
Applying Set is Subset of Itself again we have:

$N \subseteq N$
so, since $N$ is $\mu$-negative, we have: 

$\map \mu N \le 0$
By the definition of a signed measure, we cannot have both $\map \mu P = +\infty$ and $\map \mu N = -\infty$, so at least one of $\map \mu P$ and $\map \mu N$ is finite.
So, either: 

$\map {\mu^+} X = \map \mu P < \infty$
or:

$\map {\mu^-} X = -\map \mu N < \infty$
That is, at least one of $\mu^+$ and $\mu^-$ are finite.

Finally, we verify that: 

$\mu = \mu^+ - \mu^-$
Note that $A \cap P$ and $A \cap N$ are disjoint with: 

$A = \paren {A \cap P} \cup \paren {A \cap N}$
so:














\(\ds \map \mu A\)

\(=\)







\(\ds \map \mu {A \cap P} + \map \mu {A \cap N}\)





since $\mu$ is countably additive














\(\ds \)

\(=\)







\(\ds \map \mu {A \cap P} - \paren {-\map \mu {A \cap N} }\)




















\(\ds \)

\(=\)







\(\ds \map {\mu^+} A - \map {\mu^-} A\)









So:

$\mu = \mu^+ - \mu^-$
as required.
$\blacksquare$


Source of Name
This entry was named for Marie Ennemond Camille Jordan.


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.1$




