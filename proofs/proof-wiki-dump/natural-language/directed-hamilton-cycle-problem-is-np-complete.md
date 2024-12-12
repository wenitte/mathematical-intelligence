# 

Source: https://proofwiki.org/wiki/Directed_Hamilton_Cycle_Problem_is_NP-complete


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Both versions of the Directed Hamilton Cycle problem are NP-complete.


Proof
Function Version is Reducible to Decision Version
The algorithm described below solves the function version of the problem with $O \left({n^2}\right)$ calls of the decision version of the problem.

Input
The directed graph $G$
Output
Either:
A Hamilton cycle in $G$ if one exists
or:

no solution if not.


Auxiliary Function
$f \left({G}\right) \to \left\{{0, 1}\right\}$ defined as:
$f \left({G}\right) = 1$ if and only if $G$ has a Hamilton cycle
$f \left({G}\right) = 0$ if and only if $G$ has no Hamilton cycle

If $f \left({G}\right) = 0$ output no solution.

Pick a starting vertex.
Call it $v_0$.
The solution path starts at $v_0$.
While $G$ has more then one vertex:

Pick one of the edges going out of $v_0$.
Call that edge $\left({v_0, u}\right)$.
If $f \left({G - \left({v_0, u} \right)}\right) = 1$ remove $\left({v_0, u}\right)$ from $G$.
Otherwise:
add $u$ to the end of the solution set
remove the vertices $v_0$ and $u$ from $G$
replace them with a new $v_0$ where:
$\left({v_0, w}\right)$ is in the new graph if $\left({u, w}\right)$ is in the old graph
and:
$\left({w, v_0}\right)$ is in the new graph if $\left({w, v_0}\right)$ is in the old graph.
Finally add $v_0$ to the end of the solution path and we have our solution.

Every time $f \left({G}\right)$ is calculated at least one edge is removed.
Thus $f \left({G}\right)$ is called $O \left({n^2}\right)$ times.

This algorithm shows the functional problem polynomially reduces to the decision problem.
If the output of the functional problem is anything other than no solution then $G$ has a Hamilton cycle.
Thus the functional problem reduces to the the decision problem.


This article, or a section of it, needs explaining.In particular: The below does not follow from the above -- where is the "mutually polynomially reducible"? We have two statements that FP reduces to DP but no indication that DP reduces to FP. Is the second of the above statements backwards?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Because they are mutually polynomially reducible we can show that both are NP or NP-hard by showing that either of them are NP or NP-hard.
$\Box$


Directed Hamilton Cycle Problem is NP
Given a potential solution to the decision problem in the form of a sequence of vertices it is possible to determine if that sequence is a Hamilton Cycle by:

making sure every vertex appears exactly once
and:

verifying that each vertex in the sequence follows is adjacent to the previous vertex.
From NP Problem iff Solution Verifiable in Polynomial Time, a  potential solution can be verified or rejected in polynomial time.
Thus the Hamilton Cycle Problem is NP.
$\Box$


Directed Hamilton Cycle Problem is NP-hard
The objective here is to polynomially reduce the Conjunctive Normal Form Satisfiability problem with $m$ variables and $l$ clauses to the decision version of the Directed Hamilton Cycle problem.
Because CNF Satisfiability Problem is NP-Complete that is enough to show the Hamilton Cycle is NP-hard.

Consider the following diagram of a part of a graph:


It is clear that either $\left({A, B}\right)$ or $\left({B, A}\right)$ must be included in any Hamilton Cycle.
Likewise either $\left({C, D}\right)$ or $\left({D, C}\right)$ must be included.
The three cases for these four vertices are:

$\left({A, B, C, D}\right)$
$\left({A, B, E, C, D}\right)$
$\left({D, C, B, A}\right)$
In short, the four vertices $A, B, C, D$ must be visited in order or in reverse order.
Also, they can only visit the $E$ node if they are in the right order.
These pieces of the graph can be concatenated by letting the $D$ node of one piece be the same as the $A$ node of the next.

The final graph to be constructed takes a form similar to the following diagram:


The boxes represent concatenations of the pieces we have just studied.
In the final graph there will be one of these rows for every variable in the CNF SAT problem, each one linked to another row as shown here.
This creates a circuit through the rows.
A left to right path corresponds to the variable being true and a right to left path corresponds to the variable being false.

In addition to these vertices there will also be one vertex for every clause in the original problem.
These will take the $E$ vertex position in the first diagram.
A vertex will have be attached to a pair of vertices in a row if the variable the row corresponds to appears in the clause, going:

left to right if the variable is not negated
and:

right to left if it is negated.
In the image the $E$ type node would contain $x_1 \lor \neg x_2$ if the first row corresponded to $x_1$, and the second to $x_2$.
Clearly all the vertices could only be visited in a cycle if there was some choice of direction for each of the rows that allowed all the $E$ type vertices to be visited.
That would only happen if there was some way of deciding values for the variables in the CNF SAT problem that gave each clause at least one true variable in its conjunction.
And so the graph has a Hamilton Cycle iff the CNF SAT problem has a solution.

The number of vertices in a given row is at most $3 l + 3$ because:

Each variable can only appear in each clause once, otherwise that clause is either internally redundant or trivially satisfied
Each additional instance of a variable only requires three additional vertices
and:

there are only three nodes of overhead.
The number of $E$ type vertices is $l$.
Therefore the total number of vertices in the constructed graph is at most $3 l m + 3 m + l$ vertices.
Because the size of the graph is bounded by a polynomial of the size of the CNF SAT problem this scheme is a polynomial reduction from CNF SAT to the directed Hamilton Cycle problem.

The Directed Hamilton Cycle problem is NP-hard.
Because the Directed Hamilton Cycle problem is NP and NP-hard it is NP-complete.
$\blacksquare$


Corollary
The Directed Hamilton Path Problem is NP-complete.


Proof of Corollary
The proof is exactly the same as before, except instead of having all the rows in a complete circuit there is a gap, giving the Hamilton Path a definite starting and stopping point.





