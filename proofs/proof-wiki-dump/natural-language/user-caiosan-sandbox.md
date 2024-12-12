# 

Source: https://proofwiki.org/wiki/User:Caiosan/Sandbox



Problem
This problem is a special case of 3-SAT problem, defined as follow:
Given a boolean formula in conjunctive normal form, that is, an AND boolean operation among disjunctive clauses $C_i = \{x^i_1 + x^i_2 + x^i_3\}$, we want to know whether is possible to set exactly one literal as true in every clause or not.
Thus, a boolean formula to Exactly 1-3 satisfiability (1-3SAT) problem is satisfiable only if exactly one literal in each clause is true.

Theorem
1-3SAT problem is NP-complete.

Proof
1-3SAT is in NP
We can build a linear algorithm for a short certifcate to the 1-3SAT problem. Given a short certificate, namely, the assignments of $x^i_1, x^i_2, x^i_3$, to every clause $C_i$, we can easily check if exactly one of $x^i_1, x^i_2, x^i_3$ is true.
If we find a clause that does not satify the exactly one condition we say that the certificate is not valid. Otherwise we say that the certificate is valid. It is easy to notice that the verifying process is linear in the size of input.
Thus, we conclude that 1-3SAT is in NP.

1-3SAT is NP-hard
The objective here is to polynomially reduce the Conjunctive Normal Form Satisfiability problem with $m$ variables and $l$ clauses to the decision version of the Directed Hamilton Cycle problem.  Because CNF Satisfiability Problem is NP-Complete that is enough to show the Hamilton Cycle is NP-hard.
Consider the following diagram of a part of a graph:

It is clear that either $(A,B)$ or $(B,A)$ must be included in any Hamilton Cycle.  Likewise either $(C,D)$ or $(D,C)$ must be included.
The three cases for these four vertices are:

$(A,B,C,D)$
$(A,B,E,C,D)$
$(D,C,B,A)$
In short, the four vertices $A,B,C,D$ must be visited in order or in reverse order.  Also, they can only visit the $E$ node if they are in the right order.  These pieces of the graph can be concatenated by letting the $D$ node of one piece be the same as the $A$ node of the next.
The final graph to be constructed takes a form similar to the following diagram:

The boxes represent concatenations of the pieces we have just studied.  In the final graph there will be one of these rows for every variable in the CNF SAT problem, each one linked to another row as shown here. (This creates a circuit through the rows.)   A left to right path corresponds to the variable being true and a right to left path corresponds to the variable being false.
In addition to these vertices there will also be one vertex for every clause in the original problem.  These will take the $E$ vertex position in the first diagram.  A vertex will have be attached to a pair of vertices in a row if the variable the row corresponds to appears in the clause, going left to right if the variable is not negated and right to left if it is negated.  In the image the $E$ type node would contain $x_1 \lor \neg x_2$ if the first row corresponded to $x_1$, and the second to $x_2$.
Clearly all the vertices could only be visited in a cycle if there was some choice of direction for each of the rows that allowed all the $E$ type vertices to be visited.  That would only happen if there was some way of deciding values for the variables in the CNF SAT problem that gave each clause at least one true variable in its conjunction.  And so the graph has a Hamilton Cycle iff the CNF SAT problem has a solution.
The number of vertices in a given row is at most $3l + 3$ because each variable can only appear in each clause once (Otherwise that clause is either internally redundant or trivially satisfied), each additional instance of a variable only requires three additional vertices, and there are only three nodes of overhead.  The number of $E$ type vertices is $l$.  Therefore the total number of vertices in the constructed graph is at most $3lm + 3m + l$ vertices.  Because the size of the graph is bounded by a polynomial of the size of the CNF SAT problem this scheme is a polynomial reduction from CNF SAT to the directed Hamilton Cycle problem.
The Directed Hamilton Cycle problem is NP-hard.
Because the Directed Hamilton Cycle problem is NP and NP-hard it is NP-complete 
$\blacksquare$.

Corollary: The Directed Hamilton Path Problem is NP-complete
The proof is exactly the same as before, except instead of having all the rows in a complete circuit there is a gap, giving the Hamilton Path a definite starting and stopping point.





