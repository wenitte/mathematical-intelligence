# 

Source: https://proofwiki.org/wiki/Inverse_Image_under_Order_Embedding_of_Strict_Upper_Closure_of_Image_of_Point

Theorem
Let $\struct {S, \preceq}$ and $\struct {T, \preceq'}$ be ordered sets.
Let $\phi: S \to T$ be an order embedding of $\struct {S, \preceq}$ into $\struct {T, \preceq'}$
Let $p \in S$.

Then:

$\map {\phi^{-1} } {\map \phi p^{\succ'} } = p^\succ$
where $\cdot^\succ$ and $\cdot^{\succ'}$ represent strict upper closure with respect to $\preceq$ and $\preceq'$, respectively.


Proof
Let $x \in \map {\phi^{-1} } {\map \phi p^{\succ'} }$.
By the definition of inverse image:

$\map \phi x \in \map \phi p^{\succ'}$
By the definition of strict upper closure:

$\map \phi p \prec' \map \phi x$
Since $\phi$ is an order embedding:

$p \prec x$
Thus by the definition of strict upper closure:

$x \in p^\succ$
and so:

$\map {\phi^{-1} } {\map \phi p^{\succ'} } \subseteq p^\succ$

Let $x \in p^\succ$.
By the definition of strict upper closure:

$p \prec x$
Since $\phi$ is an order embedding:

$\map \phi p \prec' \map \phi x$
Thus by the definition of strict upper closure:

$\map \phi x \in \map \phi p^{\succ'}$
Thus by the definition of inverse image:

$x \in \map {\phi^{-1} } {\map \phi p^{\succ'} }$
and so:

$p^\succ \subseteq \map {\phi^{-1} } {\map \phi p^{\succ'} }$

Thus by definition of set equality:

$\map {\phi^{-1} } {\map \phi p^{\succ'} } = p^\succ$
$\blacksquare$





