# 

Source: https://proofwiki.org/wiki/Lindel%C3%B6f%27s_Lemma/Lemma_1



Theorem
Let $C$ be a set of open real sets.

Then there is a countable subset $D$ of $C$ such that:

$\ds \bigcup_{O \mathop \in D} O = \bigcup_{O \mathop \in C} O$


Proof
Lemma
Let $R$ be a set of real intervals with rational numbers as endpoints.
Let every interval in $R$ be of the same type of which there are four: $\openint \ldots \ldots$, $\closedint \ldots  \ldots$, $\hointr \ldots \ldots$, and $\hointl \ldots \ldots$.

Then $R$ is countable.
$\Box$
Let $\ds U = \bigcup_{O \mathop \in C} O$.

Let $x$ be an arbitrary point in $U$.
Since $U$ is the union of the sets in $C$, the point $x$ belongs to a set in $C$.
Name such a set $O_x$.
Since $O_x$ is open, $O_x$ contains an open interval $I_x$ that contains $x$.
By Between two Real Numbers exists Rational Number, a rational number exists between the left hand endpoint of $I_x$ and $x$.
Also, a rational number exists between $x$ and the right hand endpoint of $I_x$.
Form an open interval $R_x$ that has two such rational numbers as endpoints.
All in all:














\(\ds x \in R_x\)

\(\subset\)







\(\ds I_x \subset O_x \in C\)














\(\ds \leadsto \ \ \)





\(\ds x \in R_x\)

\(\subset\)







\(\ds O_x \in C\)










By the Lemma, $\set {R_x: x \in U}$ is countable as $\set {R_x: x \in U}$ is a set of open intervals with rational numbers as endpoints.

By Countable Set equals Range of Sequence, the countability of $\set {R_x: x \in U}$ means that there exists a sequence $\sequence {R^i}_{i \mathop \in N}$ where:

$N$ is a subset of $\N$
$\set {R_x: x \in U}$ equals the range of $\sequence {R^i}_{i \mathop \in N}$.
From this follows:

$\set {R_x: x \in U} = \set {R^i: i \in N}$ as $\set {R^i: i \in N}$ equals the range of $\sequence {R^i}_{i \mathop \in N}$.
Two sequences that differ only by one of them having duplicates, have the same range.
Therefore, it is possible to require that $\sequence {R^i}_{i \mathop \in N}$ lacks duplicates.
Now, let $i$ be an arbitrary natural number in $N$.
Let $R^i$ be an element in $\set {R^i: i \in N}$.
There is an $x$ in $U$ such that:

$R_x = R^i$ as $\set {R_x: x \in U} = \set {R^i: i \in N}$
Also, we know that a set $O_x$ in $C$ exists such that:

$R_x \subset O_x$
The uniqueness of the elements of N makes it possible to define a mapping $\chi$ that sends $i$ to $x$.
This allows us to define, for every $i$ in $N$:

$O^i = O_x$ where $x = \map \chi i$
We find, for every $i$ in $N$ and $x = \map \chi i$:

$O^i \in C$ as $O_x \in C$
$R^i \subset O^i$ as $R_x \subset O_x$ and $R_x = R^i$ and $O_x = O^i$
Every $R^i$ where $i \in N$ is uniquely determined by $i$ as $\sequence {R^i}_{i \mathop \in N}$ lacks duplicates.
Therefore, it is possible to define a mapping from $\set {R^i: i \in N}$ to $\set {O^i: i \in N}$ that sends $R^i$ to $O^i$ for every $i$ in $N$.
Image of countable set under mapping is countable.
Therefore, $\set {O^i: i \in N}$ is countable as $\set {R^i: i \in N}$ is countable.
$\set {O^i: i \in N}$ is a subset of $C$ as $O^i \in C$ for every $i \in N$.
Therefore, $\set {O^i: i \in N}$ is a countable subset of $C$.

We find by focusing on $R_x$ for an $x$ in $U$:














\(\ds x\)

\(\in\)







\(\ds R_x\)














\(\ds \leadsto \ \ \)





\(\ds \set x\)

\(\subset\)







\(\ds R_x\)














\(\ds \leadsto \ \ \)





\(\ds \bigcup_{x \mathop \in U} \set x\)

\(\subseteq\)







\(\ds \bigcup_{x \mathop \in U} R_x\)














\(\ds \leadsto \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \bigcup_{x \mathop \in U} R_x\)









So, $\set {R_x: x \in U}$ covers $U$.

We find by focusing on $O^i$ for an $i$ in $N$:














\(\ds R^i\)

\(\subset\)







\(\ds O^i\)














\(\ds \leadsto \ \ \)





\(\ds \bigcup_{i \mathop \in N} R^i\)

\(\subseteq\)







\(\ds \bigcup_{i \mathop \in N} O^i\)














\(\ds \leadsto \ \ \)





\(\ds \bigcup_{x \mathop \in U} R_x\)

\(\subseteq\)







\(\ds \bigcup_{i \mathop \in N} O^i\)





as $\set {R_x: x \in U} = \set {R^i: i \in N}$








\(\ds \leadsto \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \bigcup_{x \mathop \in U} R_x \subseteq \bigcup_{i \mathop \in N} O^i\)





as $\ds U \subseteq \bigcup_{x \mathop \in U} R_x$








\(\ds \leadsto \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \bigcup_{i \mathop \in N} O^i\)














\(\ds \leadsto \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \bigcup_{i \mathop \in N} O^i \subseteq U\)





as $\ds \bigcup_{i \mathop \in N} O^i \subseteq U$ is true since every $O_i \in C$








\(\ds \leadsto \ \ \)





\(\ds U\)

\(=\)







\(\ds \bigcup_{i \mathop \in N} O^i\)









So, $D = \set {O^i: i \in N}$ satisfies the proposition of the theorem.
$\blacksquare$


Sources
1988: H.L. Royden: Real Analysis (3rd ed.): Ch. $2$: Section $5$, proposition $9$.




