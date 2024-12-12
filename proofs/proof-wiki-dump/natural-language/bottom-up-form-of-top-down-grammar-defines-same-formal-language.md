# 

Source: https://proofwiki.org/wiki/Bottom-Up_Form_of_Top-Down_Grammar_defines_same_Formal_Language

Theorem
Let $\LL$ be a formal language.
Let $\TT$ be a top-down grammar for $\LL$.

Let $\BB$ be the bottom-up form of $\TT$.
Then $\BB$ is also a formal grammar for $\LL$.


Proof
Let $\phi$ be a $\BB$-WFF.

If $\phi$ is a letter, then it is a fortiori a $\TT$-WFF.
For, it may be formed by replacing the starting metasymbol of $\TT$ by $\phi$.

Suppose that $\phi$ is formed from WFFs $\phi_1, \ldots, \phi_n$ by the rule of formation $\mathbf R_\BB$ of $\BB$.
Suppose also that each of $\phi_1, \ldots, \phi_n$ is also a $\TT$-WFF.

Then by applying the rule of formation $\mathbf R$ of $\TT$, we obtain a collation with metasymbols $\psi_1, \ldots, \psi_n$.
By assumption, we can apply rules of formation of $\TT$ to each $\psi_i$ to yield the corresponding $\TT$-WFF $\phi_i$.
It follows that $\phi$ is also a $\TT$-WFF.

By the Principle of Structural Induction, each $\BB$-WFF is also a $\TT$-WFF.

Conversely, suppose that $\phi$ is a $\TT$-WFF.
Let it be formed by applying the rules of formation $\mathbf R_1, \ldots, \mathbf R_n$, in succession.
We will prove that each metasymbol in the inputs of these rules of formation will be replaced by a $\BB$-WFF.
In particular, then, $\phi$ will be a $\BB$-WFF.

Since $\mathbf R_n$ is the last rule of formation applied, it must replace a metasymbol by a letter.
Since letters are $\BB$-WFFs, $\mathbf R_n$ satisfies the assertion.

Suppose that we have established that all metasymbols in the result of $\mathbf R_i$ will be replaced by $\BB$-WFFs.
Then also the metasymbol $\psi$ that $\mathbf R_i$ replaces by a new collation will be replaced by a WFF.
This is because the collation resulting from replacing $\psi$ according to $\mathbf R_i$ contains metasymbols $\psi_i$, which by assumption will be replaced by corresponding $\BB$-WFFs $\phi_i$.
Now the rule of formation $\paren {\mathbf R_i}_\BB$ ensures that $\psi$ will be replaced by a $\BB$-WFF.

So each metasymbol $\psi$ in the input of $\mathbf R_i$ will be replaced by a $\BB$-WFF.
Hence $\phi$ is a $\BB$-WFF.
$\blacksquare$


Remark

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Corollary?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
This theorem establishes that any formal language has a bottom-up grammar.
We may therefore assume any formal language to be given by a bottom-up grammar, which provides conceptual simplicity.





