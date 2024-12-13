# 

Source: https://proofwiki.org/wiki/Open_Ray_is_Open_in_GO-Space/Definition_2

Theorem
Let $\struct {S, \preceq, \tau}$ be a generalized ordered space by Definition 2.
That is:

Let $\struct {S, \preceq}$ be a totally ordered set.
Let $\struct {S, \tau}$ be a topological space.

Let there be:

a linearly ordered space $\struct {S', \preceq', \tau'}$
and:

a mapping $\phi: S \to S'$ which is both:
a $\preceq$-$\preceq'$ order embedding
and:
a $\tau$-$\tau'$ topological embedding.

Let $p \in S$.

Then:

$p^\prec$ and $p^\succ$ are $\tau$-open
where:

$p^\prec$ is the strict lower closure of $p$
$p^\succ$ is the strict upper closure of $p$.


Proof
We will prove that $p^\succ$ is open.


This article, or a section of it, needs explaining.In particular: follow by duality how?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
That $p^\prec$ is open will follow by duality.
By Inverse Image under Order Embedding of Strict Upper Closure of Image of Point:

$\map {\phi^{-1} } {\map \phi p^\succ} = p^\succ$
$\map \phi p^\succ$ is an open ray in $S'$
Therefore $\tau'$-open by the definition of the order topology.


This article, or a section of it, needs explaining.In particular: What exactly is $\tau'$-open here?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Since $\phi$ is a topological embedding, it is continuous.
Thus $p^\succ$ is $\tau$-open.
$\blacksquare$





