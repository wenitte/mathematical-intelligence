# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Semantic_Equivalence_for_Predicate_Logic



Theorem
Let $\mathbf A, \mathbf B$ be WFFs of predicate logic.

The following definitions of the concept of Semantic Equivalence (Predicate Logic) are equivalent:

Definition 1
Then $\mathbf A$ and $\mathbf B$ are equivalent if and only if:

$\mathbf A \models_{\mathrm{PL_A}} \mathbf B$ and $\mathbf B \models_{\mathrm{PL_A}} \mathbf A$
that is, each is a semantic consequence of the other.

That is to say, $\mathbf A$ and $\mathbf B$ are equivalent if and only if, for all structures $\AA$ and assignments $\sigma$:

$\AA, \sigma \models_{\mathrm{PL_A}} \mathbf A$ if and only if $\AA, \sigma \models_{\mathrm{PL_A}} \mathbf B$
where $\models_{\mathrm{PL_A}}$ denotes the models relation.


Definition 2
Then $\mathbf A$ and $\mathbf B$ are equivalent if and only if:

$\mathbf A \iff \mathbf B$ is a tautology
where $\iff$ is the biconditional connective.


Proof
Let $\AA$ be a structure for predicate logic.
Let $\sigma$ be an assignment for $\mathbf A \iff \mathbf B$ in $\AA$.

Then the value of $\mathbf A \iff \mathbf B$ under $\sigma$ is given by:

$\map {f^\leftrightarrow} {\map {\operatorname{val}_\AA} {\mathbf A} \sqbrk \sigma, \map {\operatorname{val}_\AA} {\mathbf B} \sqbrk \sigma}$
and from the definition of $f^\leftrightarrow$ we see that $\AA, \sigma \models_{\mathrm{PL_A}} \mathbf A \iff \mathbf B$ if and only if:

$\map {\operatorname{val}_\AA} {\mathbf A} \sqbrk \sigma = \map {\operatorname{val}_\AA} {\mathbf B} \sqbrk \sigma$
Because the possible values are just $\T$ and $\F$, this is equivalent to:

$\map {\operatorname{val}_\AA} {\mathbf A} \sqbrk \sigma = \T$ if and only if $\map {\operatorname{val}_\AA} {\mathbf B} \sqbrk \sigma = \T$
which by definition of $\mathrm{PL_A}$-model amounts to:

$\AA, \sigma \models_{\mathrm{PL_A}} \mathbf A$ if and only if $\AA, \sigma \models_{\mathrm{PL_A}} \mathbf B$

Because $\AA$ and $\sigma$ were arbitrary, the above equivalence holds for all such $\AA$ and $\sigma$.
The result follows by definition of tautology.
$\blacksquare$





