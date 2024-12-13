# 

Source: https://proofwiki.org/wiki/Heine-Borel_Theorem/Real_Line/Closed_and_Bounded_Interval



Theorem
Let $\closedint a b$, $a < b$, be a closed and bounded real interval.
Let $S$ be a set of open real sets.
Let $S$ be a cover of $\closedint a b$.

Then there is a finite subset of $S$ that covers $\closedint a b$.


Proof
Consider the set $T = \set {x \in \closedint a b: \closedint a x \text { is covered by a finite subset of } S}$.


Step 1: $a \in T$
It is demonstrated that the number $a$ is an element of $T$.

Consider the interval $\closedint a a$.
$S$ covers $\closedint a a$ as it covers $\closedint a b$, a superset of $\closedint a a$.
Since $S$ covers $\closedint a a$, there is a set $O$ in $S$ that contains $a$.
We observe:

$\set O$ is a subset of $S$
$\set O$ is finite as it contains one element
$\set O$ covers $\closedint a a$
By the definition of $T$, $a$ is an element of $T$.


Step 2: $T$ has Supremum
It is demonstrated that $T$ has a supremum.

We know that $a \in T$.
Therefore, $T$ is non-empty.
Also, $T$ is bounded as $T$ is a subset of $\closedint a b$ which is bounded.
From these two properties of $T$, it follows by the continuum property of the real numbers that $T$ has a supremum, which will be denoted $c$.


Step 3: $c \in \closedint a b$
It is demonstrated that the number $c$ is an element of $\closedint a b$.

Every element of $T$ is less than or equal to $b$.
So, $b$ is an upper bound for $T$.
Therefore, $c \le b$ as $c$ is the least upper bound of T.
Also, $c \ge a$ because $a \in T$ and $c$ is an upper bound for $T$.
Accordingly, $c \in \closedint a b$.


Step 4: Finite Cover of $\closedint a y$
It is demonstrated that there exists a finite subset of $S$ covering $\closedint a y$ where $y > c$.

We know that $S$ covers $\closedint a b$.
Also, $c \in \closedint a b$.
From these two facts follows that there is a set $O_c$ in $S$ that contains $c$.
An $\epsilon \in \R_{>0}$ exists such that $\openint {c - \epsilon} {c + \epsilon} \subset O_c$ as $O_c$ is open.
A number $x \in T$ exists in $\openint {c - \epsilon} c$ as $c$ is the least upper bound of $T$.
By the definition of $T$, a finite subset $S_x$ of $S$ exists such that $S_x$ covers $\closedint a x$ as $x \in T$.

Let $y$ be a number in $\openint c {c + \epsilon}$.
We observe that $y > c$.
We have that $\set {O_c}$ covers $\openint {c - \epsilon} {c + \epsilon}$ as $\openint {c - \epsilon} {c + \epsilon} \subset O_c$.
Therefore, $\set {O_c}$ covers $\closedint x y$ as $\closedint x y \subset \openint {c - \epsilon} {c + \epsilon}$.
We observe the collection $S_x \cup \set {O_c}$:

$S_x \cup \set {O_c}$ is a subset of $S$
$S_x \cup \set {O_c}$ is finite
$S_x \cup \set {O_c}$ covers $\closedint a y$, the union of $\closedint a x$ and $\closedint x y$
In other words, $S_x \cup \set {O_c}$ is a finite subset of $S$ covering $\closedint a y$.


Step 5: $y > b$
It is demonstrated that $y > b$.

We know that $y > c$.
Therefore, $y \notin T$ as $c$ is an upper bound for $T$.

Let us find out exactly why $y \notin T$.
There are two requirements for $y$ to be in $T$:

$\closedint a y$ is covered by a finite subset of $S$
$y \in \closedint a b$
The first requirement is satisfied as $S_x \cup \set {O_c}$ is a finite subset of $S$ covering $\closedint a y$.
Therefore, the second requirement is not satisfied as this is the last requirement and the only possibility to satisfy $y \notin T$.
Accordingly, $y \notin \closedint a b$.

Furthermore:














\(\ds y\)

\(>\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(>\)







\(\ds c \land c \ge a\)





as $c \ge a$ since $c \in \closedint a b$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(>\)







\(\ds a\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(>\)







\(\ds a \land y \notin \closedint a b\)





as $y \notin \closedint a b$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(>\)







\(\ds b\)











Step 6: Finite Cover of $\closedint a b$
It is demonstrated that there exists a finite subset of $S$ covering $\closedint a b$.

We know that $S_x \cup \set {O_c}$ is a finite subset of $S$ covering $\closedint a y$.
Also, $\closedint a b$ is a subset of $\closedint a y$ as $y > b$.
Therefore, $S_x \cup \set {O_c}$ covers $\closedint a b$.
So, $\closedint a b$ is covered by a finite subset of $S$.
$\blacksquare$


Source of Name
This entry was named for Heinrich Eduard Heine and Émile Borel.


Sources
1988: H.L. Royden: Real Analysis (3rd ed.): Ch. $2$: Section $5$, theorem $15$




