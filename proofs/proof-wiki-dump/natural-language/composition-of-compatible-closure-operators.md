# 

Source: https://proofwiki.org/wiki/Composition_of_Compatible_Closure_Operators


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a set.
Let $f, g: \powerset S \to \powerset S$ be closure operators on $S$.
Let $\CC_f$ and $\CC_g$ be the sets of closed sets of $S$ with respect to $f$ and $g$ respectively.

For each subset $T$ of $S$, let the following hold:

$(1): \quad$ If $T$ is closed with respect to $g$, then $\map f T$ is closed with respect to $g$.
That is, if $T \in \CC_g$ then $\map f T \in \CC_g$.
$(2): \quad$ If $T$ is closed with respect to $f$, then $\map g T$ is closed with respect to $f$.
That is, if $T \in \CC_f$ then $\map g T \in \CC_f$.

Let $\CC_h = \CC_f \cap \CC_g$.

Then:

$\CC_h$ induces a closure operator $h$ on $S$
$f \circ g = g \circ f = h$, where $\circ$ represents composition of mappings.


Proof
First we show that $\CC_h$ induces a closure operator on $S$.
Let $\AA \subseteq \CC_h$.
By Intersection is Largest Subset:

$\AA \subseteq \CC_f$
and:

$\AA \subseteq \CC_g$
Thus by Intersection of Closed Sets is Closed/Closure Operator:

$\ds \bigcap \AA \in \CC_f$
and

$\ds \bigcap \AA \in \CC_g$
Thus by the definition of set intersection:

$\ds \bigcap \AA \in \CC_h$
Thus by Closure Operator from Closed Sets, $C_h$ induces a closure operator $h$ on $S$.

Now we will show that $f \circ g = h$.
Having established that, it can be seen that $g \circ f = h$ will hold by reversing the variable names.

Let $T \subseteq S$.
By definition of closed set:

$\map f {\map g T} \in \CC_f$
$\map g T \in \CC_g$
By the premise:

$\map f {\map g T} \in \CC_g$
Thus by definition of set intersection:

$\map f {\map g T} \in \CC_f \cap \CC_g = C_h$
So $\map f {\map g T}$ is closed with respect to $h$.
By Set Closure is Smallest Closed Set/Closure Operator:

$\map h T \subseteq f {\map g T}$

By definition of closed set:

$\map h T \in C_h$
Thus by definition of set intersection:

$\map h T \in C_f$
and

$\map h T \in C_g$
By Set Closure is Smallest Closed Set/Closure Operator:

$\map g T \subseteq \map h T$
By Closure Operator: Axiom $(2)$ $f$ is order-preserving:

$\map f {\map g T} \subseteq \map f {\map h T}$
Recall that $\map h T \in C_f$.
By definition of closed set:

$\map f {\map h T} = \map h T$
Thus:

$\map f {\map g T} \subseteq \map h T$
We have that:

$\map h T \subseteq \map f {\map g T}$
So by definition of set equality:

$\map h T = \map f {\map g T}$
$\blacksquare$





