# 

Source: https://proofwiki.org/wiki/Model_of_Root_of_Propositional_Tableau_is_Model_of_Branch

Theorem
Let $\struct {T, \mathbf H, \Phi}$ be a propositional tableau.
Let $v: \LL_0 \to \set {\T, \F}$ be a boolean interpretation such that:

$v \models_{\mathrm{BI}} \mathbf H$
that is, such that $v$ is a model for the root $\mathbf H$ of $T$.

Then there exists a branch $\Gamma$ of $T$ such that:

$v \models_{\mathrm{BI}} \Phi \sqbrk \Gamma$
where $\Phi \sqbrk \Gamma$ denotes the image of $\Gamma$ under $\Phi$.


Proof
We will find it convenient to reason with the constructive definition of a propositional tableau.
First, let us reduce to the case of a finite propositional tableau.

Suppose the result were to hold for these finite tableaus.
Let $T$ be an infinite propositional tableau.
Suppose that no finite branch $\Gamma$ of $T$ satisfies $v \models_{\mathrm {BI} } \Phi \sqbrk \Gamma$.
By definition, there exists an exhausting sequence $\sequence {T_n}_{n \mathop \in \N}$ of finite tableaus for $T$.
Define the labeled tree $T'$ as (the subgraph induced by):

$t \in T'$ if and only if there exist an $n \in \N$, and a branch $\Gamma_n$ of $T_n$, such that $t \in \Gamma_n$ and $v \models_{\mathrm {BI} } \Phi \sqbrk {\Gamma_n}$

Aiming for a contradiction, suppose $T'$ is finite.
By Branch of Finite Tree is Finite, all branches of $T'$ are finite.
By construction of $T'$, each of its branches $\Gamma$ satisfies:

$v \models_{\mathrm {BI} } \Phi \sqbrk \Gamma$
Because $T$ has no satisfactory finite branch, no such $\Gamma$ can be a branch of $T$.
Hence for each branch $\Gamma$, there exists an $n \in \N$ such that $\Gamma \subseteq T_n$, but $\Gamma$ is no longer a branch of $T_n$.

Since $T'$ is finite, it evidently has only finitely many branches $\Gamma_1, \ldots, \Gamma_m$.
Now let $N \ge \max \set {n_i: 1 \le i \le m}$, with $n_i$ the least $n \in \N$ such that $\Gamma_i \subseteq T_n$ is not a branch of $T_n$.
By definition of $T'$, this implies that there is no branch $\Gamma$ of $T_N$ such that:

$v \models_{\mathrm{BI}} \Phi \sqbrk \Gamma$
But this contradicts the assumption that the theorem holds for finite propositional tableaux.

Hence it only remains to prove the theorem for finite tableaux.
This we do by the Principle of Structural Induction, as applicable to the definition of a finite propositional tableau.
In the remainder of this proof, "finite propositional tableau" is abbreviated to FPT for brevity.



The case $\boxed{\mathrm{Root}}$


Let $T$ be a FPT identified by $\boxed{\mathrm{Root}}$.
Then $T$ has the branch $\Gamma = \set {r_T}$ consisting only of the root node.
Then $\Phi \sqbrk \Gamma = \mathbf H$, and by hypothesis on $v$:

$v \models_{\mathrm{BI}} \Phi \sqbrk \Gamma$
$\Box$

The case $\boxed{\neg\neg}$


Let $T$ be a FPT constructed by applying $\boxed{\neg\neg}$ to another FPT $T_0$ at $t \in T_0$, using $\neg\neg\mathbf A$.
By Leaf of Rooted Tree is on One Branch, $t$ is on a unique branch $\Gamma_t$.
The branches of $T$ are precisely those of $T_0$, except for $\Gamma_t$, which gets a child WFF $\mathbf A$.
It will therefore suffice to show that:

If $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, then $v \models_{\mathrm{BI}} \mathbf A$.
By Double Negation:

$\map v {\mathbf A} = \map v {\neg\neg\mathbf A}$
Since $\neg\neg\mathbf A$ is an ancestor WFF of $t$, it follows that $\neg\neg\mathbf A \in \Phi \sqbrk {\Gamma_t}$.
Since $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, we conclude that indeed $v \models_{\mathrm{BI}} \mathbf A$.

$\Box$

The case $\boxed{\land}$


Let $T$ be a FPT constructed by applying $\boxed{\land}$ to another FPT $T_0$ at $t \in T_0$, using $\mathbf A \land \mathbf B$.
By Leaf of Rooted Tree is on One Branch, $t$ is on a unique branch $\Gamma_t$.
The branches of $T$ are precisely those of $T_0$, except for $\Gamma_t$.
$\Gamma_t$ is extended to the branch $\Gamma_r$ of the new leaf node, $r$, and it is seen that:

$\Phi \sqbrk {\Gamma_r} = \Phi \sqbrk {\Gamma_t} \cup \set {\mathbf A, \mathbf B}$
It will therefore suffice to show that:

If $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, then $v \models_{\mathrm{BI}} \set {\mathbf A, \mathbf B}$.
Since $\mathbf A \land \mathbf B$ is an ancestor WFF of $t$, it follows that $\mathbf A \land \mathbf B \in \Phi \sqbrk {\Gamma_t}$.
Since $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, we conclude that $v \models_{\mathrm{BI}} \mathbf A \land \mathbf B$.
By the Rule of Simplification, we conclude:

$v \models_{\mathrm{BI}} \set {\mathbf A, \mathbf B}$
$\Box$

The case $\boxed{\neg\land}$


Let $T$ be a FPT constructed by applying $\boxed{\land}$ to another FPT $T_0$ at $t \in T_0$, using $\neg \paren {\mathbf A \land \mathbf B}$.
By Leaf of Rooted Tree is on One Branch, $t$ is on a unique branch $\Gamma_t$.
The branches of $T$ are precisely those of $T_0$, except for $\Gamma_t$.
$\Gamma_t$ is extended to the branches $\Gamma_s$ and $\Gamma_{s'}$ of the new leaf nodes, $s$ and $s'$, and it is seen that:

$\Phi \sqbrk {\Gamma_s} = \Phi \sqbrk {\Gamma_t} \cup \set {\neg \mathbf A}$
$\Phi \sqbrk {\Gamma_{s'} } = \Phi \sqbrk {\Gamma_t} \cup \set {\neg \mathbf B}$
It will therefore suffice to show that:

If $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, then $v \models_{\mathrm{BI}} \neg\mathbf A$ or $v \models_{\mathrm{BI}} \neg \mathbf B$.
Since $\neg \paren {\mathbf A \land \mathbf B}$ is an ancestor WFF of $t$, it follows that $\neg \paren {\mathbf A \land \mathbf B} \in \Phi \sqbrk {\Gamma_t}$.
Since $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, we conclude that $v \models_{\mathrm{BI}} \neg \paren {\mathbf A \land \mathbf B}$.
By the relevant De Morgan's Law, it follows that:

$v \models_{\mathrm{BI}} \neg\mathbf A \lor \neg\mathbf B$
which, by inspection of the truth table for $\lor$, yields the desired result.

$\Box$

The case $\boxed{\lor}$


Let $T$ be a FPT constructed by applying $\boxed{\land}$ to another FPT $T_0$ at $t \in T_0$, using $\mathbf A \lor \mathbf B$.
By Leaf of Rooted Tree is on One Branch, $t$ is on a unique branch $\Gamma_t$.
The branches of $T$ are precisely those of $T_0$, except for $\Gamma_t$.
$\Gamma_t$ is extended to the branches $\Gamma_s$ and $\Gamma_{s'}$ of the new leaf nodes, $s$ and $s'$, and it is seen that:

$\Phi \sqbrk {\Gamma_s} = \Phi \sqbrk {\Gamma_t} \cup \set {\mathbf A}$
$\Phi \sqbrk {\Gamma_{s'} } = \Phi \sqbrk {\Gamma_t} \cup \set {\mathbf B}$
It will therefore suffice to show that:

If $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, then $v \models_{\mathrm{BI}} \mathbf A$ or $v \models_{\mathrm{BI}} \mathbf B$.
Since $\mathbf A \lor \mathbf B$ is an ancestor WFF of $t$, it follows that $\mathbf A \lor \mathbf B \in \Phi \sqbrk {\Gamma_t}$.
Since $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, we conclude that $v \models_{\mathrm{BI}} \mathbf A \lor \mathbf B$.
By inspection of the truth table for $\lor$, this establishes the desired result.

$\Box$

The case $\boxed{\neg\lor}$


Let $T$ be a FPT constructed by applying $\boxed{\neg\lor}$ to another FPT $T_0$ at $t \in T_0$, using $\neg \paren {\mathbf A \lor \mathbf B}$.
By Leaf of Rooted Tree is on One Branch, $t$ is on a unique branch $\Gamma_t$.
The branches of $T$ are precisely those of $T_0$, except for $\Gamma_t$.
$\Gamma_t$ is extended to the branch $\Gamma_r$ of the new leaf node, $r$, and it is seen that:

$\Phi \sqbrk {\Gamma_r} = \Phi \sqbrk {\Gamma_t} \cup \set {\neg \mathbf A, \neg \mathbf B}$
It will therefore suffice to show that:

If $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, then $v \models_{\mathrm{BI}} \set {\neg \mathbf A, \neg \mathbf B}$.
Since $\neg \paren {\mathbf A \lor \mathbf B}$ is an ancestor WFF of $t$, it follows that $\neg \paren {\mathbf A \lor \mathbf B} \in \Phi \sqbrk {\Gamma_t}$.
Since $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, we conclude that $v \models_{\mathrm{BI}} \neg \paren {\mathbf A \lor \mathbf B}$.
By the relevant De Morgan's Law, it follows that:

$v \models_{\mathrm{BI}} \neg\mathbf A \land \neg\mathbf B$
which, by inspection of the truth table for $\land$, yields the desired result.

$\Box$

The case $\boxed{\implies}$


Let $T$ be a FPT constructed by applying $\boxed{\implies}$ to another FPT $T_0$ at $t \in T_0$, using $\mathbf A \implies \mathbf B$.
By Leaf of Rooted Tree is on One Branch, $t$ is on a unique branch $\Gamma_t$.
The branches of $T$ are precisely those of $T_0$, except for $\Gamma_t$.
$\Gamma_t$ is extended to the branches $\Gamma_s$ and $\Gamma_{s'}$ of the new leaf nodes, $s$ and $s'$, and it is seen that:

$\Phi \sqbrk {\Gamma_s} = \Phi \sqbrk {\Gamma_t} \cup \set {\neg \mathbf A}$
$\Phi \sqbrk {\Gamma_{s'} } = \Phi \sqbrk {\Gamma_t} \cup \set {\mathbf B}$
It will therefore suffice to show that:

If $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, then $v \models_{\mathrm{BI}} \neg\mathbf A$ or $v \models_{\mathrm{BI}} \mathbf B$.
Since $\mathbf A \implies \mathbf B$ is an ancestor WFF of $t$, it follows that $\mathbf A \implies \mathbf B \in \Phi \sqbrk {\Gamma_t}$.
Since $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, we conclude that $v \models_{\mathrm{BI}} \mathbf A \implies \mathbf B$.
By the Rule of Material Implication, it follows that:

$v \models_{\mathrm{BI}} \neg\mathbf A \lor \mathbf B$
By inspection of the truth table for $\lor$, this establishes the desired result.

$\Box$

The case $\boxed{\neg\implies}$


Let $T$ be a FPT constructed by applying $\boxed{\neg\implies}$ to another FPT $T_0$ at $t \in T_0$, using $\neg \paren {\mathbf A \implies \mathbf B}$.
By Leaf of Rooted Tree is on One Branch, $t$ is on a unique branch $\Gamma_t$.
The branches of $T$ are precisely those of $T_0$, except for $\Gamma_t$.
$\Gamma_t$ is extended to the branch $\Gamma_r$ of the new leaf node, $r$, and it is seen that:

$\Phi \sqbrk {\Gamma_r} = \Phi \sqbrk {\Gamma_t} \cup \set {\mathbf A, \neg \mathbf B}$
It will therefore suffice to show that:

If $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, then $v \models_{\mathrm{BI}} \set {\mathbf A, \neg \mathbf B}$.
Since $\neg \paren {\mathbf A \implies \mathbf B}$ is an ancestor WFF of $t$, it follows that $\neg \paren {\mathbf A \implies \mathbf B} \in \Phi \sqbrk {\Gamma_t}$.
Since $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, we conclude that $v \models_{\mathrm{BI}} \neg \paren {\mathbf A \implies \mathbf B}$.
By Conjunction with Negative is Equivalent to Negation of Conditional, we conclude:

$v \models_{\mathrm {BI} } \mathbf A \land \neg \mathbf B$
which, by inspection of the truth table for $\land$, yields the desired result.

$\Box$

The case $\boxed \iff$


Let $T$ be a FPT constructed by applying $\boxed \iff$ to another FPT $T_0$ at $t \in T_0$, using $\mathbf A \iff \mathbf B$.
By Leaf of Rooted Tree is on One Branch, $t$ is on a unique branch $\Gamma_t$.
The branches of $T$ are precisely those of $T_0$, except for $\Gamma_t$.
$\Gamma_t$ is extended to the branches $\Gamma_s$ and $\Gamma_{s'}$ of the new leaf nodes, $s$ and $s'$, and it is seen that:

$\Phi \sqbrk {\Gamma_s} = \Phi \sqbrk {\Gamma_t} \cup \set {\mathbf A \land \mathbf B}$
$\Phi \sqbrk {\Gamma_{s'} } = \Phi \sqbrk {\Gamma_t} \cup \set {\neg \mathbf A \land \neg \mathbf B}$
It will therefore suffice to show that:

If $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, then $v \models_{\mathrm{BI}} \mathbf A \land \mathbf B$ or $v \models_{\mathrm{BI}} \neg \mathbf A \land \neg \mathbf B$.
Since $\mathbf A \iff \mathbf B$ is an ancestor WFF of $t$, it follows that $\mathbf A \iff \mathbf B \in \Phi \sqbrk {\Gamma_t}$.
Since $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, we conclude that $v \models_{\mathrm{BI}} \mathbf A \iff \mathbf B$.
By the Biconditional as Disjunction of Conjunctions, it follows that:

$v \models_{\mathrm{BI}} \paren {\mathbf A \land \mathbf B} \lor \paren {\neg \mathbf A \land \neg \mathbf B}$
By inspection of the truth table for $\lor$, this establishes the desired result.

$\Box$

The case $\boxed {\neg \iff}$


Let $T$ be a FPT constructed by applying $\boxed {\neg \iff}$ to another FPT $T_0$ at $t \in T_0$, using $\neg \paren {\mathbf A \iff \mathbf B}$.
By Leaf of Rooted Tree is on One Branch, $t$ is on a unique branch $\Gamma_t$.
The branches of $T$ are precisely those of $T_0$, except for $\Gamma_t$.
$\Gamma_t$ is extended to the branches $\Gamma_s$ and $\Gamma_{s'}$ of the new leaf nodes, $s$ and $s'$, and it is seen that:

$\Phi \sqbrk {\Gamma_s} = \Phi \sqbrk {\Gamma_t} \cup \set {\mathbf A \land \neg \mathbf B}$
$\Phi \sqbrk {\Gamma_{s'} } = \Phi \sqbrk {\Gamma_t} \cup \set {\neg \mathbf A \land \mathbf B}$
It will therefore suffice to show that:

If $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, then $v \models_{\mathrm{BI}} \mathbf A \land \neg\mathbf B$ or $v \models_{\mathrm{BI}} \neg\mathbf A \land \mathbf B$.
Since $\neg \paren {\mathbf A \iff \mathbf B}$ is an ancestor WFF of $t$, it follows that $\neg \paren {\mathbf A \iff \mathbf B} \in \Phi \sqbrk {\Gamma_t}$.
Since $v \models_{\mathrm{BI}} \Phi \sqbrk {\Gamma_t}$, we conclude that $v \models_{\mathrm{BI}} \neg \paren {\mathbf A \iff \mathbf B}$.
By the Non-Equivalence as Disjunction of Conjunctions, it follows that:

$v \models_{\mathrm{BI}} \paren {\mathbf A \lor \neg \mathbf B} \lor \paren {\neg\mathbf A \land \mathbf B}$
By inspection of the truth table for $\lor$, this establishes the desired result.

$\Box$

By the Principle of Structural Induction, it follows that the result holds for every finite propositional tableau.
As we had already reduced the theorem to the finite case, this completes the proof.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.8$: Soundness: Lemma $1.8.1$




