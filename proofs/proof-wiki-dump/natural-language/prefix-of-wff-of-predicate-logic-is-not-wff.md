# 

Source: https://proofwiki.org/wiki/Prefix_of_WFF_of_Predicate_Logic_is_not_WFF


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $\mathbf A$ be a WFF of predicate logic.
Let $\mathbf S$ be a prefix of $\mathbf A$.

Then $\mathbf S$ is not a WFF of predicate logic.


Proof
Let $\map l {\mathbf Q}$ denote the length of a string $\mathbf Q$.
By definition, $\mathbf S$ is a prefix of $\mathbf A$ iff $\mathbf A = \mathbf{ST}$ for some non-null string $\mathbf T$.
Thus we note that $\map l {\mathbf S} < \map l {\mathbf A}$.

The proof proceeds by induction on $\map l {\mathbf A}$.


Basis for the Induction
Let $\mathbf A$ be a WFF such that $\map l {\mathbf A} = 1$.
Then for a prefix $\mathbf S$:

$\map l {\mathbf S} < 1 = 0$
That is, $\mathbf S$ must be the null string, which is not a WFF.
So the result holds for WFFs of length $1$.
This is the basis for the induction.


Induction Hypothesis
Fix $n \in \N$ with $n \ge n_0$.
Assume the result holds for all WFFs of length $k$ or less.
This is our induction hypothesis.


Induction Step
This is our induction step:

Let $\mathbf A$ be a WFF such that $\map l {\mathbf A} = k + 1$.
Suppose $\mathbf D$ is a prefix of $\mathbf A$ which happens to be a WFF.
That is, $\mathbf A = \mathbf{DT}$ where $\mathbf T$ is non-null.

We need to investigate the following cases:

$(1): \quad \mathbf A = \neg \mathbf B$, where $\mathbf B$ is a WFF of length $k$.
$(2): \quad \mathbf A = \left({\mathbf B \circ \mathbf C}\right)$ where $\circ$ is one of the binary connectives.
$(3): \quad \mathbf A = \map p {t_1, t_2, \ldots, t_n}$, where $t_1, t_2, \ldots, t_n$ are terms, and $p \in \PP_n$.
$(4): \quad \mathbf A = ( Q x: \mathbf B )$, where $\mathbf B$ is a WFF of length $k-5$, $Q$ is a quantifier ($\forall$ or $\exists$) and $x$ is a variable.
We deal with these one by one.

Cases $(1)$ and $(2)$ are covered by the argument in Prefix of WFF of PropLog is not WFF.


$(3): \quad$ The atomic WFF $\mathbf A = \map p {u_1, u_2, \ldots, u_n}$:
Here we have that $\mathbf D$ would be a string of the form:

$p$ where $p$ is an $n$-ary predicate symbol. This can not be a WFF.
$p ($ which is also not a WFF.
$p (u_1, u_2, \ldots, u_k$ which can not be a WFF.
$p (u_1, u_2, \ldots, u_k,$ which can not be a WFF.


$(4): \quad \mathbf A = ( Q x: \mathbf B )$:
$\mathbf D$ can not be $($, $( Q$, $( Q x$ or $( Q x:$ as none of these are WFFs.
Thus $\mathbf D$ is a WFF, starting with $( Q x: $; hence $\mathbf D = ( Q x: \mathbf E )$, where $\mathbf E$ is also a WFF.
We remove the initial $( Q x: $ and the last closing parenthesis $)$ from $\mathbf A = \mathbf{DT}$ to get $\mathbf B = \mathbf{ET}'$ (where $\mathbf T'$ results from $\mathbf T$ by removing the last closing parenthesis).
Recall that $\mathbf B$ is a WFF of length $k - 5$.
It has $\mathbf E$ as a prefix, which is itself a WFF.
This contradicts the induction hypothesis.
Therefore no prefix of $\mathbf A = ( Q x: \mathbf{B} )$ can be a WFF.

Thus all four cases have been investigated, and we have found that no prefix of any WFF of length $k + 1$ can be a WFF.
The result follows by the Second Principle of Mathematical Induction.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability: $\S 2.2$: Lemma $2.2.3$




