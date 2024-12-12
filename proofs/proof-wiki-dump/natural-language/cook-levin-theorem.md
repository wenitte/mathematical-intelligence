# 

Source: https://proofwiki.org/wiki/Cook-Levin_Theorem


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
The boolean satisfiability problem is NP-Complete.


Proof
The Boolean Satisfiability Problem is NP
Given a boolean satisfiability problem with a set of variables $X$ and clauses $L$ and a possible solution to the problem, it is a trivial matter to evaluate all the clauses in $L$ to verify the solution in polynomial time.


This article contains statements that are justified by handwavery.In particular: The above needs to be justified with a page demonstrating this.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
From NP Problem iff Solution Verifiable in Polynomial Time it is NP.


All NP-complete problems are polynomially reducible to the boolean satisfiability problem
The objective is, given a non-deterministic Turing Machine $M$ with $k$ internal states and an input $x$, to construct a set of variables and clauses that has a solution if and only if $M$ accepts the input $x$.
From  the definition of NP we know that $M$ either accepts the input $x$ within $\map p {\size x}$ steps, or it does not accept the input at all, where $p$ is some polynomial.
From Turing Machine cannot use More Squares of Memory than the Number of Steps that it Runs, we only need to concern  ourselves with the first $\map p {\size x}$ squares of memory.
Let $\Sigma$ denote the finite alphabet that the machine recognizes.

Let the variables for the boolean satisfiability problem be given by:




Variable

Interpretation

Number


$q_{j n}$

$M$ is in state $j$ on step $n$

$k * \map p {\size x}$


$T_{m \ \alpha \ n}$

The $m$th square contains the symbol $\alpha \in \Sigma$ on step $n$

\Sigma| * \map p x^2$


$H_{m \ n}$

The $m$th square is being looked at during step $n$

$\map p {\size x}^2$


This article, or a section of it, needs explaining.In particular: The symbol $*$ in the above -- while it is frequently used in computer science to denote multiplication, this is a page on a mathematics website, and so a standard mathematics symbol is required.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Let the clauses for the boolean satisfiability problem be given by:




Clause

Interpretation

Number

Length


$q_{0 0}$

The Machine is in the initial state $\paren {q_0}$ on step $0$.

1

Constant


$if \ m < \size x \  T_{m x_m 0}$

Let $x_m$ denote the $m$'th symbol of the input.  This represents the initial state of the work tape.

$\size x$

Constant


$H_{00}$

The Tape is in the initial position on step 0.

1

Constant


$if \ a \ne b \ q_{a n} \implies \neg q_{b n}$

Only one internal state at a time

$\paren {k^2 - k} * n$

Constant


$if \ a \ne b \ T_{m \ a \ n} \implies \neg T_{m \ b \ n}$

Only one symbol per square at a time

$\paren {\size \Sigma^2 - \size \Sigma} * \map p {\size x}^2$

Constant


$if \ a \ne b \ H_{a n} \implies \neg H_{b n}$

Only one square is being looked at during any cycle.

$\map p {\size x}^2 - \map p {\size x}$

Constant


$\neg H_{m \ n} \implies \paren {T_{m \ \alpha \ n} = T_{m \ \alpha \ n + 1} }$

A square that was not looked at cannot change.

$\size \Sigma * \map p {\size x}^2$

Constant


$q_{\text {accept} \ \map p {\size x} }$

$M$ is in the accepting state at the end of the computation.

1

Constant


$\paren {q_{j \ n} \land T_{m \ \alpha \ n} \land H_{m \ n} } \implies \bigvee \paren {q_{l \ n + 1} \land T_{m \ \beta \ n + 1} \land H_{m \pm 1 \ n + 1} }$

These clauses encode the rules of $M$ into logical expressions.
See the explanation below.


$k * \size \Sigma * \map p {\size x}^2$

Varies (see below)


This article, or a section of it, needs explaining.In particular: What are those ifs doing? The $\implies$ should take on board the if in the sentence so I believe they are superfluousYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

A production rule in a non-deterministic Turing machine can be written in the form:

$\tuple {q_a, \alpha} \to \tuple {q_b, \beta, D_1} \lor \tuple {q_c, \gamma, D_2}$
meaning:

if the machine is in state $q_a$ and reading $\alpha$ on the tape,
either:
replace $\alpha$ with $\beta$
move one square in direction $D_1$ (either left or right)
change the internal state to $q_b$
or:
replace $\alpha$ with $\gamma$
move one square in the $D_2$ direction
go to internal state $q_c$.
If $D_1$ is left and $D_2$ is right then this rule would translate to:

$\paren {q_a \land T_{m \ \alpha \ n} \land H_{m \ n} } \implies \paren {\paren {q_b \land T_{m \ \beta \ n + 1} \land H_{m - 1 \ n + 1} } \lor \paren {q_c \land T_{m \ \gamma \ n + 1} \land H_{m + 1 \ n + 1} } }$

If the rule in the machine allows for more then two choices then this rule can be modified by adding more triplets to the right hand side of the implication rule.
The length of this clause is determined by the number of choices that $M$ gives for a given internal state and a given input.
Because this number of choices is bounded for any given machine, the total space used for this group of clauses is $\map O {\map p {\size x}^2}$.

In total, the size of the the boolean satisfiability problem is $\map O {\map p {\size x}^2}$, with the constant depending on $M$.

The conversion from a description of $M$ to the boolean satisfiability problem is straightforward and can be done in polynomial time.

The problem described has a solution if and only if $M$ accepts $x$ as its input.
All NP problems are polynomially reducible to the boolean satisfiability problem.
Therefore the boolean satisfiability problem is NP-hard.

The boolean satisfiability problem is NP-complete.
$\blacksquare$


Source of Name
This entry was named for Stephen Arthur Cook and Leonid Anatolievich Levin.


Historical Note
The Cook-Levin Theorem was the first demonstration of a problem, in this case the boolean satisfiability problem, to be shown to be NP-complete.





