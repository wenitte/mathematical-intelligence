# 

Source: https://proofwiki.org/wiki/Lower_Closure_of_Meet_of_Lower_Closures

Theorem
Let $\struct {S, \preceq}$ be a meet semilattice.
Let $D_1, D_2$ be subsets of $S$.
Then:

$\set {i_1 \wedge i_2: i_1 \in D_1^\preceq, i_2 \in D_2^\preceq}^\preceq = \set {i_1 \wedge i_2: i_1 \in D_1, i_2 \in D_2}^\preceq$
where

$D_1^\preceq$ denotes the lower closure of $D_1$.


Proof
By Lower Closure is Closure Operator:

$D_1 \subseteq D_1^\preceq$ and $D_2 \subseteq D_2^\preceq$
Then

$\set {i_1 \wedge i_2: i_1 \in D_1, i_2 \in D_2} \subseteq \set {i_1 \wedge i_2: i_1 \in D_1^\preceq, i_2 \in D_2^\preceq}$
By Lower Closure is Closure Operator:

$\set {i_1 \wedge i_2: i_1 \in D_1, i_2 \in D_2}^\preceq \subseteq \set {i_1 \wedge i_2: i_1 \in D_1^\preceq, i_2 \in D_2^\preceq}^\preceq$
By definition of set equality it remains to prove that

$\set {i_1 \wedge i_2: i_1 \in D_1^\preceq, i_2 \in D_2^\preceq}^\preceq \subseteq \set {i_1 \wedge i_2: i_1 \in D_1, i_2 \in D_2}^\preceq$
Let $x \in \set {i_1 \wedge i_2: i_1 \in D_1^\preceq, i_2 \in D_2^\preceq}^\preceq$.
By definition of lower closure of set:

$\exists y \in \set {i_1 \wedge i_2: i_1 \in D_1^\preceq, i_2 \in D_2^\preceq} \land x \preceq y$
Then:

$\exists i_1 \in D_1^\preceq, i_2 \in D_2^\preceq: y = i_1 \wedge i_2$
By definition of lower closure of set:

$\exists d_1 \in D_1: i_1 \preceq d_1$
and

$\exists d_2 \in D_2: i_2 \preceq d_2$
By Meet Semilattice is Ordered Structure:

$y \preceq d_1 \wedge d_2$
By definition of transitivity:

$x \preceq d_1 \wedge d_2$
$d_1 \wedge d_2 \in \set {i_1 \wedge i_2: i_1 \in D_1, i_2 \in D_2}$
Thus by definition of lower closure of set:

$x \in \set {i_1 \wedge i_2: i_1 \in D_1, i_2 \in D_2}^\preceq$
Thus the result.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article YELLOW_4:62




