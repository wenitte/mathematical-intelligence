# 

Source: https://proofwiki.org/wiki/Provable_by_Gentzen_Proof_System_iff_Negation_has_Closed_Tableau/Set_of_Formulas



Theorem
Let $\mathscr G$ be instance 1 of a Gentzen proof system.
Let $U$ be a set of WFFs of propositional logic.
Then:

$U$ is a $\mathscr G$-theorem
if and only if:

$\bar U$ has a closed semantic tableau
where $\bar U$ is the set comprising the logical complements of all WFFs in $U$.


Proof
Denote with $\bar{\mathbf A}$ and $\bar U$ the logical complement of a WFF $\mathbf A$ and set $U$, respectively.


Necessary Condition
We aim to prove this result using the Second Principle of Mathematical Induction, applied to the minimal length of a formal proof of $U$.

Suppose first that $U$ is an axiom of $\mathscr G$.
Then $U$ contains a complementary pair of literals.
Hence, so does $\bar U$, by definition of logical complement.

Therefore, the semantic tableau comprising only a root node labeled $\bar U$ is closed.

Next, suppose that the last step in proving $U$ was an instance of the $\alpha$-rule.
That is, for some $\alpha$-formula $\mathbf A$ and corresponding $\mathbf A_1, \mathbf A_2$:

$U = U_1 \cup U_2 \cup \set {\mathbf A}$
where $U_1 \cup \set {\mathbf A_1}$ and $U_2 \cup \set {\mathbf A_2}$ are $\mathscr G$-theorems.
By induction hypothesis, the logical complements:

$\bar U_1 \cup \set {\bar {\mathbf A}_1}$
$\bar U_2 \cup \set {\bar {\mathbf A}_2}$
of these theorems have closed tableaux.
From the Soundness Theorem for Semantic Tableaux, it follows that these sets are unsatisfiable.
Now by Superset of Unsatisfiable Set is Unsatisfiable, so are:

$\bar U' := \bar U_1 \cup \bar U_2 \cup \set {\bar{\mathbf A}_1}$
$\bar U := \bar U_1 \cup \bar U_2 \cup \set {\bar{\mathbf A}_1}$
By the Completeness Theorem for Semantic Tableaux, these have closed tableaux.
Since $\mathbf A$ is an $\alpha$-formula, it is equivalent to $\mathbf A_1 \land \mathbf A_2$.
By De Morgan's Laws, it follows that:

$\bar{\mathbf A}$ is equivalent to $\bar {\mathbf A}_1 \lor \bar {\mathbf A}_2$.
Therefore, $\bar {\mathbf A}$ is a $\beta$-formula, and $\bar{\mathbf A}_1, \bar{\mathbf A}_2$ correspond to it as in the table of $\beta$-formulas.

This allows the Semantic Tableau Algorithm to expand a leaf labeled $\bar U$ into two leaves labeled $\bar U'$ and $\bar U$.
Because $\bar U'$ and $\bar U$ have closed tableaux, so does $\bar U$.

Finally, suppose that the last step in proving $U$ was an instance of the $\beta$-rule.
That is, for some $\beta$-formula $\mathbf B$ and corresponding $\mathbf B_1, \mathbf B_2$:

$U = U_1 \cup \set {\mathbf B}$
where $U' := U_1 \cup \set {\mathbf B_1, \mathbf B_2}$ is a $\mathscr G$-theorem.
By induction hypothesis, the logical complement:

$\bar U' = \bar U_1 \cup \set {\bar{\mathbf B}_1, \bar{\mathbf B}_2}$
of this $\mathscr G$-theorem has a closed tableau.
Since $\mathbf B$ is a $\beta$-formula, it is equivalent to $\mathbf B_1 \lor \mathbf B_2$.
By De Morgan's Laws, it follows that:

$\bar{\mathbf B}$ is equivalent to $\bar{\mathbf B}_1 \land \bar{\mathbf B}_2$.
Therefore, $\bar{\mathbf B}$ is an $\alpha$-formula, and $\bar{\mathbf B}_1, \bar{\mathbf B}_2$ correspond to it as in the table of $\alpha$-formulas.

This allows the Semantic Tableau Algorithm to expand a leaf labeled $\bar U$ into a leaf labeled $\bar U'$.
Because $\bar U'$ has a closed tableau, so does $\bar U$.

The result follows by the Second Principle of Mathematical Induction.
$\Box$


Sufficient Condition
Let $T$ be a closed tableau for $\bar U$.
We prove that $U$ is a $\mathscr G$-theorem by the Second Principle of Mathematical Induction, applied to the number of nodes of $T$.

Suppose $T$ has only one node.
Then $\bar U$ has to contain a complementary pair of literals for $T$ to be closed.
But then $U$ also contains a complementary pair.
Hence, it is an axiom of $\mathscr G$.

If $T$ has more than one node, the first iteration of the Semantic Tableau Algorithm must have selected either an $\alpha$-formula $\mathbf A$ or a $\beta$-formula $\mathbf B$ from $\bar U$.

First the case that an $\alpha$-formula $\mathbf A$ was selected.
Define, for convenience, $\bar U' = \bar U \setminus \set {\mathbf A}$.
Then the rest of $T$ is a semantic tableau for $\bar U' \cup \set {\mathbf A_1, \mathbf A_2}$.
This tableau has fewer nodes than $T$.
For $T$ to be closed, this subtree must also be a closed tableau.
By induction hypothesis, this means that $U' \cup \set {\bar{\mathbf A}_1, \bar{\mathbf A}_2}$ is a $\mathscr G$-theorem.

Now, since $\mathbf A$ is an $\alpha$-formula, it is equivalent to $\mathbf A_1 \land \mathbf A_2$.
Hence by De Morgan's Laws, $\bar{\mathbf A}$ is equivalent to $\bar{\mathbf A}_1 \lor \bar{\mathbf A}_2$.
That is, $\bar{\mathbf A}$ is a $\beta$-formula, so that the $\beta$-rule may be applied to it.
Hence, $U = U' \cup \set {\bar{\mathbf A} }$ is a $\mathscr G$-theorem, as desired.

Now the case that a $\beta$-formula $\mathbf B$ was selected.
Define, for convenience, $\bar U' = \bar U \setminus \set {\mathbf B}$.
Then the rest of our closed tableau $T$ comprises two semantic tableaux for $\bar U' \cup \set {\mathbf B_1}$ and $\bar U' \cup \set {\mathbf B_2}$, respectively.
Each of these has fewer nodes than $T$.

For $T$ to be closed, these subtrees must also be closed tableaux.
By induction hypothesis, this means that $U' \cup \set {\bar{\mathbf B}_1}$ and $U' \cup \set {\bar{\mathbf B}_2}$ are $\mathscr G$-theorems.

Now, since $\mathbf B$ is a $\beta$-formula, it is equivalent to $\mathbf B_1 \lor \mathbf B_2$.
Hence by De Morgan's Laws, $\bar{\mathbf B}$ is equivalent to $\bar{\mathbf B}_1 \land \bar{\mathbf B}_2$.
That is, $\bar{\mathbf B}$ is an $\alpha$-formula, so that the $\alpha$-rule may be applied to it.
Hence, $U = U' \cup \set {\bar{\mathbf B} }$ is a $\mathscr G$-theorem, as desired.

The result now follows from the Second Principle of Mathematical Induction.
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 3.2.1$: Theorem $3.7$




