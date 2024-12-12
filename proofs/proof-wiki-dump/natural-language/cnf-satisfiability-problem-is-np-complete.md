# 

Source: https://proofwiki.org/wiki/CNF_Satisfiability_Problem_is_NP-Complete


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of advanced complexity.In particular: Split this proof into sections. Also address duplication concerns on talk page.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
The conjunctive normal form boolean satisfiability problem (CNF SAT) is NP-complete.


Proof
Let $P$ be a CNF SAT problem.


CNF SAT is NP
A potential solution to $P$ can be verified in polynomial time by checking every clause in $L$ to see if they all have at least one true un-negated variable or one false negated variable.
Because a solution can be verified or rejected in polynomial time the problem is NP


CNF SAT is NP-hard
We will show this by reducing the boolean satisfiability (SAT) problem to CNF SAT.
The algorithm to convert the SAT) problem to CNF SAT is recursive.
Wherever  $A$, $B$,and $C$ are seen in the output it is understood that the  algorithm would call itself on those formulas and convert them into CNF.


iff and xor
The first step will be to remove every instance of mutual implication and exclusive or from the problem.
In every clause with one of these functions there must be at least one that does not have any instance of mutual implication or exclusive or in its arguments.
Introduce a new variable $x$ and replace either:

$A \implies B$ with $x$
or:

$\map \neg {A \implies B}$ with $\neg x$
as appropriate.
Then add the following four clauses to $L$:

$A \lor B \lor x$
$A \lor \neg B \lor \neg x$
$\neg A \lor B \lor \neg x$
$\neg A \lor \neg B \lor x$
Repeat this procedure until there are no more mutual implications or exclusive ors in the list of clauses.

It is important to note that the amount this procedure adds to the size of the final problem is bounded.
Specifically, every instance of mutual implication or exclusive or increases the number of variables by one, increases the number of "new" symbols in $L$ by a fixed number and reproduces every "old" symbol in $L$ at most four times.
In total, this step increases the size of the problem at most linearly.
The remaining functions that need to be considered can be converted to CNF with only a constant amount of increase to the size by a constant amount per production.

Given a logical expression it will either be a variable, a unary function, or a binary function.


Single Variable
If $A$ is a single variable then it is in CNF and the task is complete.


Unary functions
With the two constant functions, one can simply replace $\map {f_\F} A$ and $\map {f_\T} A$ with $\F$ and $\T$ respectively.
These can then be removed from the final expression as appropriate.


This article, or a section of it, needs explaining.In particular: Link to the results linking $\F$ and $\T$ with disjunctions / conjunctions etc.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
For the identity function, replace $\map {f_I} A$ with the CNF conversion of $A$.
With the $\neg$ function the replacement depends on the argument.
If  the argument is a single variable $x$ then the output $\neg x$ is in CNF.
If the argument is one of the constant functions then replace $\neg \map {f_\F} A$ and $\neg \map {f_\T} A$ with $\T$ and $\F$ respectively.
If the argument is a binary function of the form  $\map f {A, B}$ then replace the function with the appropriate one, following the list below:

$\neg \map {f_\F} {A, B} \to \map {f_\T} {A, B}$
$\neg \map {f_\T} {A, B} \to \map {f_\F} {A, B}$


$\neg A \land B \to A \uparrow B$
$\neg A \uparrow B \to A \land B$


$\map \neg {A \implies B} \to \map \neg {A \implies B}$
$\map {\neg \neg} {A \implies B} \to \paren {A \implies B}$


$\neg \map {\pr_1} {A, B} \to \map {\overline {\pr_1} } {A, B}$
$\neg \map {\overline {\pr_1} } {A, B} \to \map {\pr_1} {A, B}$


$\neg \left({B \implies A}\right) \to \neg \left({B \implies A}\right)$
$\neg \neg \left({B \implies A}\right) \to \left({B \implies A}\right)$


$\neg \pr_2 \to \overline {\pr_2}$
$\neg \overline {\pr_2} \to \pr_2$


$\neg A \lor B \to A \downarrow B$
$\neg A \downarrow B \to A \lor B$


Binary Functions
Replace $\map {f_\T} {A, B}$ with $\T$.
$A \lor B$ is already in CNF.
Replace $A \implies B$ with $\neg A \lor B$.
Replace $\map {\pr_1} {A, B}$ with $A$.
Replace $B \implies A$ with $A \lor \neg B$.
Replace $\map {\pr_2} {A, B}$ with $B$.
In  the case of $A \land B$ the clause takes either the form:

$A \land B$
or:

$\paren {A \land B} \lor C$
In the first case simply replace the clause with  the two clauses $A$ and $B$.
In the second case introduce the new variable $x$ and replace the clause with the three clauses:

$x \lor C$
$\neg x \lor A$
$\neg x \lor B$
A simple case analysis will show that the above clauses have a solution if and only if $\paren {A \land B} \lor C$.
Replace $A \uparrow B$ with $\neg A \lor \neg B$
Replace $\map {\overline {\pr_2} } {A, B}$ with $\neg B$.
Replace $\map \neg {A \implies B}$ with $A \land \neg B$ and use the rule for $A \land B$.
Replace $\map {\overline {\pr_2} } {A, B}$ with $\neg A$.
Replace $\map \neg {B \implies A}$ with $\neg A \land B$ and use the rule for $A \land B$.
Replace $A \downarrow B$ with $\neg A \land \neg B$ and use the rule for $A \land B$.
Replace $\map {f_\F} {A, B}$ with $\F$.

At this point there may be some instances of $\T$ and $\F$ in the clauses.
They can be removed by:

deleting any clause from $L$ that contains $\T$ in any of its conjunctions
and:

removing $\F$ from any clause that contains it.
Note that if any clause simplifies to $\F$ the problem is trivially unsatisfiable and the task is complete.

In the end the size and number of variables in the CNF problem is $\map \OO n$ where $n$ is the number of symbols required to write down the original SAT problem.
Hence the conversion can be done in polynomial time.
We have that Boolean Satisfiability Problem is NP-hard.
But SAT is reducible to CNF SAT.
Therefore CNF SAT is NP-hard.
CNF SAT is NP-complete.


This article, or a section of it, needs explaining.In particular: The logical steps need to be clarified in the above.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$





