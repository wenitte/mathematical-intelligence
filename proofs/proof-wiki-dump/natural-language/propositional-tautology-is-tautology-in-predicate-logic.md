# 

Source: https://proofwiki.org/wiki/Propositional_Tautology_is_Tautology_in_Predicate_Logic

Theorem
Let $\LL_1$ be the language of predicate logic.
Let $\LL_0$ be the language of propositional logic.
Let the basic WFFs of $\LL_1$ be the vocabulary of $\LL_0$.

Let $\mathbf A$ be a $\mathrm{BI}$-tautology of $\LL_0$, by considering the basic subformulas of $\mathbf A$ as part of the vocabulary of $\LL_0$.
Then $\mathbf A$ is a $\mathrm{PL_A}$-tautology of $\LL_1$.


Proof
We proceed by the Principle of Structural Induction on the bottom-up specification of $\LL_1$, applied to $\mathbf A$.
Define $\map {v_F} {\mathbf A} = F$ for all basic WFFs $\mathbf A$ as a boolean interpretation for $\LL_0$.

Consider the case $\mathbf A$ is formed by either $\paren{ \mathbf W ~ \PP_n }$ or $\paren{ \mathbf W ~ \forall\exists }$.
Then $\mathbf A$ is basic, and therefore:

$\map {v_F} {\mathbf A} = F$
meaning that $\mathbf A$ is not a $\mathrm{BI}$-tautology.

Consider next the case $\mathbf A$ is formed by either $\paren{ \mathbf W ~ \neg }$ or $\paren{ \mathbf W ~ \lor, \land, \Rightarrow, \Leftrightarrow }$.
That is, $\mathbf A = \neg \mathbf B$ or $\mathbf A = \mathbf B \circ \mathbf B'$ for $\circ$ being one of $\lor, \land, \Rightarrow, \Leftrightarrow$.
Suppose $\mathbf A$ is not a $\mathrm{PL_A}$-tautology.
Then there are a structure $\AA$ and an assignment $\sigma$ such that:

$\AA, \sigma \not\models \mathbf A$
Then define the boolean interpretation $v_{\AA, \sigma}$ on basic WFFs $\mathbf B$ by:

$\map {v_{\AA, \sigma} } {\mathbf B} = T$ if and only if $\AA, \sigma \models \mathbf B$
which is to say:

$\map {v_{\AA, \sigma} } {\mathbf B} = \map {\operatorname{val}_\AA} {\mathbf B} \sqbrk \sigma$
where $\map {\operatorname{val}_\AA} {\mathbf B} \sqbrk \sigma$ is the value of $\mathbf A$ in $\AA$ under $\sigma$.

Hence, by definition of boolean interpretation:














\(\ds \map {v_{\AA, \sigma} } {\neg \mathbf B}\)

\(=\)







\(\ds T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map {v_{\AA, \sigma} } {\mathbf B}\)

\(=\)







\(\ds F\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \AA, \sigma\)

\(\not\models\)







\(\ds \mathbf B\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \AA, \sigma\)

\(\models\)







\(\ds \neg \mathbf B\)









And similarly, for $\circ$ being one of $\lor, \land, \Rightarrow, \Leftrightarrow$:














\(\ds \map {v_{\AA, \sigma} } {\mathbf B \circ \mathbf B'}\)

\(=\)







\(\ds T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map {f^\circ} {\map {v_{\AA, \sigma} } {\mathbf B}, \map {v_{\AA, \sigma} } {\mathbf B'} }\)

\(=\)







\(\ds T\)





Definition of Boolean Interpretation








\(\ds \leadstoandfrom \ \ \)





\(\ds \map {f^\circ} {\map {\operatorname{val}_\AA} {\mathbf B} \sqbrk \sigma, \map {\operatorname{val}_\AA} {\mathbf B'} \sqbrk \sigma }\)

\(=\)







\(\ds T\)





Definition of $v_{\AA, \sigma}$








\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\operatorname{val}_\AA} {\mathbf B \circ \mathbf B'} \sqbrk \sigma\)

\(=\)







\(\ds T\)





Definition of Value of Formula under Assignment








\(\ds \leadstoandfrom \ \ \)





\(\ds \AA, \sigma\)

\(\models\)







\(\ds \mathbf B \circ \mathbf B'\)









Since by hypothesis $\AA, \sigma \not\models \mathbf A$, it follows that:

$\map {v_{\AA, \sigma} } {\mathbf A} = F$
and $\mathbf A$ is not a $\mathrm{BI}$-tautology.
The induction case for $\paren{ \mathbf W ~ \neg }$ and $\paren{ \mathbf W ~ \lor, \land, \Rightarrow, \Leftrightarrow }$ follows by transposition.

Hence the result by the Principle of Structural Induction.
$\blacksquare$


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text{II}.9$ Tautologies: Exercise $\text{II}.9.3$




