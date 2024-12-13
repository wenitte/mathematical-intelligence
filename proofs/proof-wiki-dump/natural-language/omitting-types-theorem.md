# 

Source: https://proofwiki.org/wiki/Omitting_Types_Theorem


This page has been identified as a candidate for refactoring of advanced complexity.In particular: Henkin construction, etc.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\LL$ be the language of predicate logic with a countable signature.
Let $T$ be an $\LL$-theory.
Let $\set {p_i: i \in \N}$ be a countable set of non-isolated $n$-types of $T$.

There is a countable $\LL$-structure $\MM$ such that $\MM \models T$ and $\MM$ omits each $p_i$.


Proof
This proof is done by constructing a model using a method known as a Henkin construction.
This results in a model all of whose elements are the interpretations of constant symbols from some language.
The construction for this proof in particular is done so that the theory this model satisfies asserts that each tuple of constants fails to satisfy at least one $\phi$ from each type $p_i$.
As a result, the model we construct will not realize any of the types.

We will prove the theorem for the special case where we only omit one type.
That is, assume $\set {p_i: i \in \N}$ is $\set p$ for some $p$.
Comments on the general case will be made after the proof.

Our goal is to eventually be able to apply Maximal Finitely Satisfiable Theory with Witness Property is Satisfiable to a suitable $\LL^*$-theory $T^*$, where $\LL^*$ contains $\LL$ and $T^*$ contains $T$.
Let $\LL^*$ be $\LL \cup \set {c_i : i \in \N}$ where each $c_i$ is a new constant symbol.
Note that $\LL^*$ is still countable.
We will recursively construct $T^*$ by adding a sentence $\theta_k$ at each stage.
In order to ensure that it has the necessary properties, we will construct it in stages, each of which has three steps.
The goal of the first step of each stage is ensure that $T^*$ will be maximal upon completion of the definition.
The goal of the second step of each stage is to ensure that $T^*$ will satisfy the witness property.
The goal of the third step of each stage is to ensure that $p$ is not realized by any tuple of constants.

Since $\LL^*$ is countable, the set of $\LL$-formulas is countable, and hence in particular, the $\LL^*$-sentences can be listed as $\phi_0, \phi_1, \ldots$
Similarly, since $\LL^*$ is countable, the set of $n$-tuples of its constant symbols can be listed as $\bar d_0, \bar d_1, \dots$


Recursive definition of $T^*$
We now recursively define sets $T_k$ whose union will be $T^*$.


Stage $k = 0$
Let $\theta_0$ be any $\LL$-sentence which is a tautology; for example, $\forall x : x = x$.
Let $T_0 = T \cup \set {\theta_0}$.
Note that $T_0$ is satisfiable since $T$ is satisfiable, and $T \models \theta_0$ trivially.

Suppose that $\theta_k$ and $T_k$ have been defined and $T_k$ is satisfiable.
We now handle the three steps of the $k$-th stage as mentioned above.


Stage $k + 1 = 3 i + 1$
In this step we ensure that $T^*$ will be maximal.
If $T_k \cup \set {\phi_i}$ is satisfiable, let $\theta_{k + 1}$ be $\phi_i$.
Otherwise, since $T_k$ is satisfiable, $T_k \cup \set {\neg \phi_i}$ must be satisfiable.
In this case we let $\theta_{k + 1}$ be $\neg \phi_i$.
Let $T_{k + 1} = T_k \cup \set {\theta_{k + 1} }$.


Stage $k + 1 = 3 i + 2$
In this step we ensure that $T^*$ will have the witness property.
Suppose that:

$T_k \models \phi_j$ for some set of $j \le i$
and that:

$\phi_j$ are each of the form $\exists v \map {\psi_j} v$.
Let $\theta_{k + 1}$ be $\bigwedge \map \psi c$ where $c$ is a new constant which doesn't appear in $T_k$.
This is possible since $T_k$ only has finitely many $\LL^*$-sentences which are not $\LL$-sentences.
Let $T_{k + 1} = T_k \cup \set {\theta_{k + 1} }$.
Since $T_k$ is satisfiable and $T_k \models \bigwedge \exists v \map {\psi_j} v$, any model $\MM$ of $T_k$ has an element $a_j$ such that $\MM \models \map {\psi_j} {a_j}$.
By interpreting $c_j$ as $a_j$, we can view $\MM$ as a model of $T_{k + 1}$.
Thus $T_{k + 1}$ is satisfiable.
If $T_k$ doesn't satisfy any existential statements $\phi_j$ for $j \le i$, let $\theta_{k + 1}$ be $\theta_k$ and let $T_{k + 1}$ be $T_k$.


Stage $k + 1 = 3 i + 3$
In this step we ensure that $p$ will be omitted by any model of $T^*$.
Let $(e_1,\dots,e_n)$ be the $i$-th $n$-tuple of constants $\bar d_i$.
We will add a sentence to ensure that $\bar d_i$ fails to realize $p$.
Let $\psi$ be the $\LL$-formula obtained from $\theta_0 \wedge \cdots \theta_k$ by:

$(1): \quad$ replacing occurrences of the constants $e_1, \dotsc, e_n$ with variables $v_1, \dotsc, v_n$
$(2): \quad$ replacing occurrences of $c_i$ besides $e_1, \dotsc, e_n$ by variables $v_{c_i}$ other than $v_1, \dotsc, v_n$
and finally:

$(3): \quad$ adding an existential quantifier $\exists v_{c_i}$ for each of the $c_i$ that were replaced other than $e_1, \dotsc, e_n$.
This results in $\psi$ being an $\LL$-formula with $n$ free variables.
The free variables are those that correspond to the $e_i$.
Since $p$ is not isolated, there must be some $\phi\in p$ such that:

$T \not \models \forall \map {\bar v} {\map \psi {\bar v} \to \map \phi {\bar v} }$
Thus:

$T \models \exists \map {\bar v} {\map \psi {\bar v} \wedge \neg \map \phi {\bar v} }$
Let $\theta_{k + 1}$ be $\neg \map \phi {\bar d_i}$.
Let $T_{k + 1} = T_k \cup \set {\theta_{k + 1} }$.
Since $T$ is satisfiable, it has a model $\MM$.
By the above:

$\MM \models \exists \map {\bar v} {\map \psi {\bar v} \wedge \neg \map \phi {\bar v} }$
Hence there is some tuple $\bar a$ in $\MM$ such that:

$\MM \models \map \psi {\bar a} \wedge \neg \map \phi {\bar a}$
Let the constants $e_1, \dotsc, e_n$ be interpreted as the constants in the tuple $\bar a$.
Let the the constants $c_i$ other than $e_1, \dotsc, e_n$ be interpreted as the elements from $\MM$ which satisfy the existential quantifiers in $\map \psi {\bar a}$.
Then we have that $\MM$ can be viewed as a model of $\theta_0 \wedge \dotsb \wedge \theta_k \wedge \neg \map \phi {\bar d_i}$ as well.
Thus $T_{k + 1}$ is satisfiable.


Verification of properties of $T^*$
Now, let $\ds T^* = \bigcup_{k \mathop \in \N} T_k$, or equivalently:

$T^* = T \cup \set {\theta_k: k \in \N}$
We verify that $T^*$ is a maximal finitely satisfiable theory with the witness property.
Thus we may apply Maximal Finitely Satisfiable Theory with Witness Property is Satisfiable which is the theorem that will construct our desired model.


$T^*$ is finitely satisfiable
Let $\Delta$ be a finite subset of $T^*$.
Then $\Delta$ is contained in one of the $T_k$.
But by construction each $T_k$ was satisfiable.
Heence by the Compactness Theorem $\Delta$ is satisfiable.


$T^*$ is a maximal theory
Let $\phi$ is an $\LL^*$-sentence.
Then it is some $\phi_i$.
Hence either $\phi$ or $\neg \phi$ is contained in $T_{3i + 1}$.


$T^*$ has the witness property
Let $\map \psi v$ be an $\LL^*$-formula with one free variable.
Then $\exists v \map \psi v$ is an $\LL^*$-sentence and hence is some $\phi_j$.
Suppose $T^*\models \exists v \map \psi v$.
There must be a finite subset $\Delta$ of $T^*$ such that $\Delta \models \exists v \map \psi v$.
Otherwise, by the Compactness Theorem, since $\Delta \cup \set {\neg \exists v \map \psi v}$ is always satisfiable, $T^* \cup \set {\neg \exists v \map \psi v}$ is satisfiable.
Since such a $\Delta$ must be contained in one of the $T_k$, there is some $T_k$ such that $T_k \models \exists v \map \psi v$.
Since each $T_k$ is contained in $T_{k + 1}$, we can assume that $k = 3 i + 2$ for some $i \le j$.
But, $T_{3 i + 2}$ contains $\map \psi c$ for some constant $c$ since $j \le i$ and $T_{3i+2}\models \phi_j$.


Verification that the constructed model omits $p$
Recall that $\LL$ was assumed to be countable.
Thus $\LL^*$ is countable as well.
Thus, by Maximal Finitely Satisfiable Theory with Witness Property is Satisfiable applied to $T^*$:

there is an $\LL^*$-structure $\MM$ such that $\MM \models T^*$
every element of $\MM$ is the interpretation of one of the constant symbols from $\LL^*$
and consequently:

$\MM$ is at most countable.

We verify that $\MM$ omits $p$.
That is, every $n$-tuple of elements in $\MM$ fails some sentence in $p$.

Let $\tuple {a_1, \dotsc, a_n}$ be an $n$-tuple of elements from $\MM$.
Then each of $a_1, \dotsc, a_n$ is the interpretation of constant symbol $e_1, \dotsc, e_n$ respectively from $\LL^*$.
In turn, $\tuple {e_1, \dotsc, e_n}$ is one of the $\bar d_i$.
But $T_{3 i + 3} \models \neg \map \phi {\bar d_i}$ for some $\phi \in p$.
Thus $\MM \models \neg \map \phi {a_1, \dots, a_n}$ for some $\phi \in p$.

Hence, $\MM$ omits $p$.


Generalization to countable set of non-isolated types
The above proof can be generalized by extending stage $k + 1 = 3i + 3$.
As it is written above, we force $\bar d_i$ to fail to satisfy some $\phi$ in a single type $p$.
But suppose we list the pairs $\set {\tuple {\bar d_\alpha, p_\beta} : \alpha, \beta \in \N}$ as a set $\tuple {\pi_i: i \in \N}$.
This is possible since the set of such pairs is countable.
Then at stage $3 i + 3$, where $\pi_i = \tuple {\bar d_\alpha, p_\beta}$, we can force $\bar d_\alpha$ to fail to satisfy some $\phi$ in $p_\beta$.
This is achieved analogously to how it is done in the above proof.
This ensures that for each $\bar d_\alpha$ with $\alpha \in \N$, and for each $p_\beta$, eventually some $T_k$ includes a sentence $\neg \map \phi {\bar d_\alpha}$ for some $\phi \in p_\beta$.
That is, eventually some $T_k$ ensures that $\bar d_\alpha$ does not realize $p_\beta$.
$\blacksquare$


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




