# 

Source: https://proofwiki.org/wiki/Class_of_Finite_Character_is_Closed_under_Chain_Unions

Theorem
Let $A$ be a class which has finite character.
Then $A$ is closed under chain unions.


Proof
Let $C$ be a chain of elements of $A$.
$C$ is a set.
To show that $\bigcup C \in A$ it is sufficient to show that every finite subset of $\bigcup C$ is also an element of $A$.
Let $\set {y_1, y_2, \ldots, y_n}$ be an arbitrary subset of $\bigcup C$.
For each $i \le n$, we have that $y_i$ is an element of some $c_i$ of $C$.
Let $c$ be the greatest element by the subset relation of the sets $\set {c_1, c_2, \ldots, c_n}$.
Then each of the sets $y_1, y_2, \ldots, y_n$ is an element of $c$.
Hence $\set {y_1, y_2, \ldots, y_n} \subseteq c$.
Thus every finite subset of $\bigcup C$ is the subset of some element of $C$,
Hence every finite subset of $\bigcup C$ is the subset of some element of $A$.
Hence by Class of Finite Character is Swelled, every finite subset of $\bigcup C$ is an element of $A$.
So, as $A$ has finite character:

$\bigcup C \in A$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {II}$ -- Maximal principles: $\S 5$ Maximal principles: Lemma $5.4 \ (2)$




