# 

Source: https://proofwiki.org/wiki/Homotopy_Group_is_Group


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
The set of all homotopy classes of continuous mappings:

$c: \closedint 0 1^n \to X$
satisfying:

$\map c {\partial \closedint 0 1^n} = x_0$
in a space $X$ at a base point $x_0$, under the operation of concatenation on class members, forms a group.


This needs considerable tedious hard slog to complete it.In particular: This operation needs to be shown well-defined; probably a nasty proofTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
This group is called the $n$th homotopy group.


Proof
We examine each of the group axioms separately.


Group Axiom $\text G 0$: Closure
The concatenation of any two mappings:

$c_1, c_2: \closedint 0 1^n \to X$
from any two (not necessarily distinct) equivalence classes is another mapping:

$c_3: \closedint 0 1^n \to X$
by the definition of concatenation, which will have its own equivalence class.


Group Axiom $\text G 1$: Associativity
Let $c_1, c_2, c_3$ be three functions $\closedint 0 1^n \to X$, selected from three (not necessarily different) equivalence classes.
The concatenation $\paren {c_1 * c_2} * c_3$ is, from the definition of concatenation:

$\map A {\hat v} = \begin {cases}
\map {c_1} {4 v_1, v_2, \ldots, v_n} & : v_1 \in \closedint 0 {\dfrac 1 4} \\
\map {c_2} {4 v_1 - 1, v_2, \ldots, v_n} & : v_1 \in \openint {\dfrac 1 4} {\dfrac 1 2} \\
\map {c_3} {2 v_1 - 1, v_2, \ldots, v_n} & : v_1 \in \closedint {\dfrac 1 2} 1
\end{cases}$
Likewise, the concatenation $c_1 * \paren {c_2 * c_3}$ is by definition:

$\map B {\hat v} = \begin {cases}
\map {c_1} {2 v_1, v_2, \ldots, v_n} & : v_1 \in \closedint 0 {\dfrac 1 2} \\
\map {c_2} {4 v_1 - 2, v_2, \ldots, v_n} & : v_1 \in \openint {\dfrac 1 2} {\dfrac 3 4} \\
\map {c_3} {4 v_1 - 3, v_2, \ldots, v_n} & : v_1 \in \closedint {\dfrac 3 4} 1
\end {cases}$
We construct a homotopy:

$\map H {\hat v, t} = \begin {cases}
\map {c_1} {\dfrac {4 v_1} {1 + t}, v_2, \ldots, v_n} & : v_1 \in \closedint 0 {\dfrac {1 + t} 4} \\
\map {c_2} {4 v_1 - t - 1, v_2, \ldots, v_n} & : v_1 \in \openint {\dfrac {1 + t} 4} {\dfrac {2 + t} 4} \\
\map {c_3} {\dfrac {4 v_1 - \paren {2 + t} } {2 - t}, v_2, \ldots, v_n} & : v_1 \in \closedint {\dfrac {2 + t} 4} 1
\end {cases}$
We observe it satisfies $\map H {\hat v, 0} = \map A {\hat v}$ and $\map H {\hat v, 1} = \map B {\hat v}$.
Therefore $A$ and $B$ are in the same equivalence class.


Group Axiom $\text G 2$: Existence of Identity Element
The identity is simply the function $I: \closedint 0 1^n \to X$ defined as $\map I {\hat v} = x_0$, where $\hat v \in \closedint 0 1^n$.
Suppose we are given the function $c: \closedint 0 1^n \to X$ and its concatenation with $i$:

$\map {\paren {c*i} } {\hat v} = \begin {cases}
\map c {2 v_1, v_2, \ldots, v_n} & : v_1 \in \closedint 0 {\dfrac 1 2} \\
\map I {\hat v} = x_0 & : v_1 \in \closedint {\dfrac 1 2} 1
\end {cases}$
We construct a homotopy:

$\map H {\hat v, t} = \begin {cases}
\map c {\dfrac {2 v_1} {2 - t}, v_2, \ldots, v_n} & : v_1 \in \closedint 0 {1 - \dfrac {1 - t} 2} \\
\map I {\hat v} = x_0 & : v_1 \in \closedint {1 - \dfrac {1 - t} 2} 1
\end{cases}$ 
which satisfies $\map H {\hat v, 0} = \map c {\hat v}$ and $\map H {\hat v, 1} = \map {\paren {c*i} } {\hat v}$.
This shows $c$ and $c*i$ are in the same equivalence class.


Group Axiom $\text G 3$: Existence of Inverse Element
For any $c: \closedint 0 1^n \to X$, $\map {c^{-1} } {\hat v} = \map c {\tuple {1, 0, \ldots, 0} - \hat v}$.
Then we can construct a homotopy:

$\map H {\hat v, t} = \begin {cases}
\map c {2 v_1, v_2, \ldots, v_n} & : v_1 \in \closedint 0 {\dfrac {1 - t} 2} \\
\map c {1 - t, v_2, \ldots, v_n} & : v_1 \in \openint {\dfrac {1 - t} 2} {\dfrac {1 + t} 2} \\
\map {c^{-1} } {2 v_1 - 1, v_2, \ldots v_n} & : v_1 \in \closedint {\dfrac {1 + t} 2} 1
\end {cases}$
We observe it satisfies:

$\map H {\hat v, 0} = \begin {cases}
\map c {2 v_1, v_2, \ldots, v_n} & : v_1 \in \closedint 0 {\dfrac 1 2} \\
\map {c^{-1} } {2 v_1 - 1, v_2, \ldots, v_n} & : v_1 \in \closedint {\dfrac 1 2} 1
\end {cases}$
and:

$\map H {\hat v, 1} = x_0$
Hence $I$ and $c * c^{-1}$ are in the same equivalence class.
$\blacksquare$


Also see
Homotopy Group is Homeomorphism Invariant
Fundamental Group is Independent of Base Point for Path-Connected Space
List of Fundamental Groups for 2-Manifolds




