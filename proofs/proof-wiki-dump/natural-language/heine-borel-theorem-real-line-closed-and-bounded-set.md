# 

Source: https://proofwiki.org/wiki/Heine-Borel_Theorem/Real_Line/Closed_and_Bounded_Set



Theorem
Let $F$ be a closed and bounded real set.
Let $C$ be a set of open real sets.
Let $C$ be a cover of $F$.

Then there is a finite subset of $C$ that covers $F$.


Proof
We are given that $C$ is a set of open real sets that covers $F$.
In other words, $C$ is an open cover of $F$.
We need to show that there is a finite subset of $C$ that covers $F$.
In other words, we need to show that $C$ has a finite subcover.

Let $F_o$ be the complement of $F$ in $\R$.
By definition of closed real set, $F_o$ is open as $F$ is closed.


Step 1: $C^*$ is an Open Cover of $\closedint a b$
It is demonstrated that $C^*$ is an open cover of $\closedint a b$.

Since $F$ is bounded, $F$ is contained in a closed and bounded interval $\closedint a b$ where $a, b \in \R$.
Define $C^* = C \cup \set {F_o}$.
Like $C$, $C^*$ is a set of open real sets as $F_o$ is open.

$C^*$ covers $F \cup F_o$ as $C$ covers $F$ and $\set {F_o}$ covers $F_o$.
$F_o \cup F$ equals $\R$ as $F_o$ is the complement of $F$ in $\R$.
So $C^*$ covers $\R$.
Furthermore, $C^*$ is an open cover of $\closedint a b$ as $\closedint a b$ is a subset of $\R$.


Step 2: $C^*$ has a Finite Subcover
It is demonstrated that $C^*$ has a finite subcover $C^*_f$.

$C^*$ is an open cover of the closed and bounded interval $\closedint a b$.
Therefore, by Open Cover of Closed and Bounded Real Interval has Finite Subcover, $C^*$ has a finite subcover $C^*_f$.


Step 3: $C$ has a Finite Subcover
It is demonstrated that $C$ has a finite subcover $C_f$.

Note that $F_o$ is the only element in $C^*$ that is not an element of $C$.
Therefore, $F_o$ is the only possible element in $C^*_f$ that is not an element of $C$ as $C^*_f$ is a subset of $C^*$.
This means that $C^*_f \setminus \set {F_o}$ is a subset of $C$.

Define $C_f = C^*_f \setminus \set {F_o}$.
According to the reasoning above, $C_f \subseteq C$.
Also, $C_f$ is finite as $C^*_f$ is finite.
What remains is to show that $C_f$ covers $F$.

We have:














\(\ds F\)

\(\subseteq\)







\(\ds \closedint a b\)


















\(\, \ds \land \, \)

\(\ds \closedint a b\)

\(\subseteq\)







\(\ds \bigcup_{O \mathop \in C^*_f} O\)





as $C^*_f$ is a cover of $\closedint a b$








\(\ds \leadsto \ \ \)





\(\ds F\)

\(\subseteq\)







\(\ds \bigcup_{O \mathop \in C^*_f} O\)





Subset Relation is Transitive








\(\ds \leadsto \ \ \)





\(\ds F \cap \relcomp \R {F_o}\)

\(\subseteq\)







\(\ds \paren {\bigcup_{O \mathop \in C^*_f} O} \cap \relcomp \R {F_o}\)





Set Intersection Preserves Subsets








\(\ds \leadsto \ \ \)





\(\ds F \cap \relcomp \R {\relcomp \R F}\)

\(\subseteq\)







\(\ds \paren {\bigcup_{O \mathop \in C^*_f} O} \cap \relcomp \R {F_o}\)





as $F_o = \relcomp \R F$, the complement of $F$ in $\R$








\(\ds \leadsto \ \ \)





\(\ds F \cap F\)

\(\subseteq\)







\(\ds \paren {\bigcup_{O \mathop \in C^*_f} O} \cap \relcomp \R {F_o}\)





Relative Complement of Relative Complement








\(\ds \leadsto \ \ \)





\(\ds F\)

\(\subseteq\)







\(\ds \paren {\bigcup_{O \mathop \in C^*_f} O} \cap \relcomp \R {F_o}\)





Set Intersection is Idempotent




Furthermore, as $F \subseteq \closedint a b$:












\(\ds F\)

\(\subseteq\)







\(\ds \paren {\bigcup_{O \mathop \in C^*_f} O} \cap \relcomp \R {F_o}\)




















\(\ds \)

\(\subseteq\)







\(\ds \paren {\bigcup_{O \mathop \in C^*_f \cup \set {F_o} } O} \cap \relcomp \R {F_o}\)





by $\ds \paren {\bigcup_{O \mathop \in C^*_f} O} \subseteq \paren {\bigcup_{O \mathop \in C^*_f \cup \set {F_o} } O}$ and Set Intersection Preserves Subsets














\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{O \mathop \in C^*_f \cup \set {F_o} } O} \setminus F_o\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{O \mathop \in \paren {C^*_f \setminus \set {F_o} \cup \set {F_o} } } O} \setminus F_o\)





Set Difference Union Second Set is Union














\(\ds \)

\(=\)







\(\ds \paren {\paren {\bigcup_{O \mathop \in \paren {C^*_f \setminus \set {F_o} } } O} \cup F_o} \setminus F_o\)




















\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{O \mathop \in \paren {C^*_f \setminus \set {F_o} } } O} \setminus F_o\)





Set Difference with Union is Set Difference














\(\ds \)

\(\subseteq\)







\(\ds \bigcup_{O \mathop \in \paren {C^*_f \setminus \set {F_o} } } O\)





Set Difference is Subset














\(\ds \)

\(=\)







\(\ds \bigcup_{O \mathop \in C_f} O\)





Definition of $C_f$



Thus, $C_f$ covers $F$.
This finishes the proof.
$\blacksquare$


Source of Name
This entry was named for Heinrich Eduard Heine and Émile Borel.


Sources
1988: H.L. Royden: Real Analysis (3rd ed.): Ch. $2$: Section $5$, theorem $15$




