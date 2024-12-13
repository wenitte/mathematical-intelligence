# 

Source: https://proofwiki.org/wiki/Rule_of_Sequent_Introduction



Theorem
Let the statements $P_1, P_2, \ldots, P_n$ be conclusions in a proof, on various assumptions.
Let $P_1, P_2, \ldots, P_n \vdash Q$ be a sequent for which we already have a proof.
Then we may infer, at any stage of a proof (citing SI), the conclusion $Q$ of the sequent already proved.
This conclusion depends upon the pool of assumptions upon which $P_1, P_2, \ldots, P_n$ rest.

This is called the Rule of Sequent Introduction.


Proof
By hypothesis we have a proof of:

$P_1, P_2, \ldots, P_n \vdash Q$
Therefore we can include this proof in our current proof and arrive at $Q$ with the pool of assumptions upon which $P_1, P_2, \ldots, P_n$ rest.
$\blacksquare$


Also known as

The validity of the material on this page is questionable.In particular: I really doubt whether this is the "rule of replacement" because that typically does not involve premisesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
This rule is also known as the rule of replacement.


Also see
Rule of Theorem Introduction, which is a direct corollary of this.


Technical Note
When invoking Rule of Sequent Introduction in a tableau proof, use the {{SequentIntro}} template:

{{SequentIntro|line|pool|statement|depends|sequent}}
where:

line is the number of the line on the tableau proof where Rule of Sequent Introduction is to be invoked
pool is the pool of assumptions (comma-separated list)
statement is the statement of logic that is to be displayed in the Formula column, without the $ ... $ delimiters
depends is the line (or lines) of the tableau proof upon which this line directly depends
sequent is the link to the sequent in question that will be displayed in the Notes column.


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.9$: Derivation by Substitution
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 4$
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement




