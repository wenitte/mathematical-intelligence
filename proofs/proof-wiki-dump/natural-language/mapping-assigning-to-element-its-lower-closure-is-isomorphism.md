# 

Source: https://proofwiki.org/wiki/Mapping_Assigning_to_Element_Its_Lower_Closure_is_Isomorphism

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $I = \struct {\map {\mathit {Ids} } L, \precsim}$ be an inclusion ordered set
where:

$\map {\mathit {Ids} } L$ denotes the set of all ideals in $L$
$\mathord \precsim = \mathord \subseteq \cap \paren {\map {\mathit {Ids} } L \times \map {\mathit {Ids} } L}$

Let $P = \struct {\map K I, \precsim'}$ be an ordered subset of $I$
where:

$\map K I$ denotes the compact subset of $I$.

Let $f: S \to \map K I$ be a mapping such that:

$\forall x \in S: \map f x = x^\preceq$

Then $f$ is an order isomorphism between $L$ and $P$.


Proof
By definition:

$\forall x \in S: x^\preceq$ is a principal ideal.
By Compact Element iff Principal Ideal:

$\forall x \in S: x^\preceq$ is a compact element in $I$.
By definition of compact subset:

$\forall x \in S: x^\preceq \in \map K I$
Then $f$ is well-defined.
We will prove that:

$f$ is an order embedding.
That means:

$\forall x, y \in S: x \preceq y \iff \map f x \precsim' \map f y$
Let $x, y \in S$.
We will prove as lemma that:

$x^\preceq \subseteq y^\preceq \implies x \preceq y$
Assume that:

$x^\preceq \subseteq y^\preceq$
By definition of reflexivity:

$x \preceq x$
By definition of lower closure of element:

$x \in x^\preceq$
By definition of subset:

$x \in y^\preceq$
Thus by definition of lower closure of element:

$x \preceq y$
$\Box$


$x \preceq y$
if and only if:

$x^\preceq \subseteq y^\preceq$ by lemma and Lower Closure is Increasing
if and only if:

$\map f x \subseteq \map f y$ by definition of $f$
if and only if:

$\map f x \precsim \map f y$ by definition of $\precsim$
if and only if:

$\map f x \precsim' \map f y$ by definition of ordered subset.
$\Box$

We will prove that:

$\forall a \in \map K I: \exists y \in S: a = \map f y$
Let $a \in \map K I$.
By definition of compact subset:

$a$ is a compact element in $I$.
By Compact Element iff Principal Ideal:

$a$ is a principal ideal.
By definition of principal ideal:

$\exists y \in S: a = y^\preceq$
Thus by definition of $f$:

$a = \map f y$
$\Box$

Thus $f$ is a surjection.
Hence $f$ is an order isomorphism.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL13:13




