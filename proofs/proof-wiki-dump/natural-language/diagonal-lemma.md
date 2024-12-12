# 

Source: https://proofwiki.org/wiki/Diagonal_Lemma

Theorem
Let $T$ be the set of theorems of some theory in the language of arithmetic which contains minimal arithmetic.

For any formula $\map B y$ in the language of arithmetic, there is a sentence $G$ such that

$T \vdash G \leftrightarrow \map B {\hat G}$
where $\hat G$ is the Gödel number of $G$ (more accurately, it is the term in the language of arithmetic obtained by applying the function symbol $s$ to $0$ this many times).


The term Definition:Logical Formula as used here has been identified as being ambiguous.If you are familiar with this area of mathematics, you may be able to help improve $\mathsf{Pr} \infty \mathsf{fWiki}$ by determining the precise term which is to be used.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Disambiguate}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
There is a primitive recursive function $\mathrm {diag}$ which is defined by:

$\map {\mathrm {diag} } n = \widehat {\map A {\hat A} }$
where:

$\map A x$ is the formula such that $\hat A = n$.
the $\hat {}$ sign denotes the Gödel number of the contained formula (and we are not being formal about distinguishing between integers and symbols in the language).
Informally, $\mathrm {diag}$ takes a Gödel number, decodes it to a formula, plugs in the Gödel number for that formula in place of a free variable, and encodes this new formula back to a new Gödel number.

Since $T$ contains $Q$, by Recursive Sets are Definable in Arithmetic applied to the graph of $\mathrm {diag}$, we have that there is some formula $\map {\mathrm {Diag} } {x, y}$ which defines the graph of $\mathrm {diag}$ in $T$.
That is:

$\map {\mathrm {diag} } n = m$ if and only if $T \vdash \map {\mathrm {Diag} } {n, m}$

Let $\map A x$ be the formula:

$\exists y \paren {\map {\mathrm {Diag} } {x, y} \land \map B y}$
Let $G$ be $\map A {\hat A}$.

We then have $T \vdash \map {\mathrm {Diag} } {\hat A, \hat G}$, by checking the definitions.

Let $T' = T \cup \set G$.
Then:

$T' \vdash \map A {\hat A}$
Hence:

$T' \vdash \exists y \paren {\map {\mathrm {Diag} } {\hat A, y} \land \map B y}$
But since $\hat G$ is the only number such that $T \vdash \map {\mathrm {Diag} } {\hat A, \hat G}$, this gives us:

$T' \vdash \map B {\hat G}$
Thus:

$T \vdash G \rightarrow \map B {\hat G}$

Let $T' = T \cup \set {\map B {\hat G} }$.
Again, we have:

$T \vdash \map {\mathrm {Diag} } {\hat A, \hat G}$
so this gives us:

$T' \vdash \map {\mathrm {Diag} } {\hat A, \hat G} \land \map B {\hat G}$
and hence:

$T' \vdash \exists y \paren {\map {\mathrm {Diag} } {\hat A, y} \land \map B y}$
But this is the same thing as:

$T' \vdash G$
Thus:

$T \vdash \map B {\hat G} \rightarrow G$

Thus $G$ is as claimed.
$\blacksquare$


This article needs to be linked to other articles.In particular: first line of proofYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Sources
2007: George S. Boolos, John P. Burgess and Richard C. Jeffrey: Computability and Logic (5th ed.)




