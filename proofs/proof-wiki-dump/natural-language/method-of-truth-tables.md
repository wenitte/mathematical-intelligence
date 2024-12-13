# 

Source: https://proofwiki.org/wiki/Method_of_Truth_Tables



Proof Technique
The method of truth tables is a technique for determining the validity of propositional formulas with respect to boolean interpretations.
In particular, for discerning if a propositional formula is a tautology for boolean interpretations.

To start with, we establish the characteristic truth tables of the various logical connectives.
We write one row for each boolean interpretation of the set of variables that we are concerned with.
From Count of Rows of Truth Table this amounts to $2^n$ rows if there are $n$ variables.

There are therefore two rows in the truth table for the only non-trivial unary connective:
$\begin{array}{|c||c|} \hline
p & \neg p \\
\hline
\F & \T \\
\T & \F \\
\hline
\end{array}$

and four rows in the truth tables for the binary connectives (the usual subset of which is given below):
$\begin{array}{|cc||c|c|c|c|c|c|c|c|} \hline
p & q & p \land q  & p \lor q & p \implies q & p \iff q & p \impliedby q & p \oplus q & p \uparrow q & p \downarrow q \\
\hline
\F & \F & \F & \F & \T & \T & \T & \F & \T & \T \\
\F & \T & \F & \T & \T & \F & \F & \T & \T & \F \\
\T & \F & \F & \T & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \F & \F & \F \\
\hline
\end{array}$

There are various sorts of proof this technique can be put to, as follows.
These will be illustrated by various examples.


Proof of Tautology
This is used to establish whether or not a given propositional formula is a tautology for boolean interpretations; that, is valid in all boolean interpretations.

Let $P$ be a propositional formula we wish to validate.
Subsequently, determine its truth table.
In the column under the main connective of $P$ itself can be found the truth value of $P$ for each boolean interpretation.

If this contains nothing but $\T$, then $P$ is a tautology.
If this contains nothing but $\F$, then $P$ is a contradiction.
If this contains $\T$ for some boolean interpretations and $\F$ for others, then $P$ is a contingent statement.


Proof of Interderivability
Suppose we have two propositional formulas $P$ and $Q$ and we wish to see whether $P \dashv \vdash Q$ or not.


Example: Let $P$ be $p \uparrow q$ and let $Q$ be $\neg \paren {p \land q}$.

There are two things we can do.


Express two statements as a single WFF
We express $P \dashv \vdash Q$ as a single WFF $\paren {P \iff Q}$ and perform the method of truth tables on that.
Demonstrating this with the example given:
$\begin{array}{cc||cccccccc}
p & q & (p & \uparrow & q) & \iff & \neg & (p & \land & q) \\
\hline
\F & \F & \F & \T & \F & \T & \T & \F & \F & \F \\
\F & \T & \F & \T & \T & \T & \T & \F & \F & \T \\
\T & \F & \T & \T & \F & \T & \T & \T & \F & \F \\
\T & \T & \T & \F & \T & \T & \F & \T & \T & \T \\
\end{array}$

As can be seen, the column under the main connective $\iff$ of $\paren {P \iff Q}$ is all $\T$, so $\paren {\paren {p \uparrow q} \iff \neg \paren {p \land q} }$ is a tautology.
Hence from Equivalences are Interderivable, $\paren {\paren {p \uparrow q} \dashv \vdash \neg \paren {p \land q} }$ and the two formulas are interderivable.
$\blacksquare$


Compare two WFFs in the same table
Alternatively, we can place the two WFFs side by side in the same truth table:
$\begin{array}{cc||ccc||cccc}
p & q & (p & \uparrow & q) & \neg & (p & \land & q) \\
\hline
\F & \F & \F & \T & \F & \T & \F & \F & \F \\
\F & \T & \F & \T & \T & \T & \F & \F & \T \\
\T & \F & \T & \T & \F & \T & \T & \F & \F \\
\T & \T & \T & \F & \T & \F & \T & \T & \T \\
\end{array}$
This time, we need to make sure that the truth values in the columns under the main connectives of both formulae are the same.
Note that this is exactly the same as putting an instance of $\iff$ between the two and making a WFF out of the pair of them.
$\blacksquare$


Proof of Logical Implication
Suppose we wish to prove that $P \vdash Q$ for two propositional formulas $P$ and $Q$.

Example: Let $P$ be $\neg p$ and $Q$ be $p \implies q$.


Express two statements as a single WFF
We express $P \vdash Q$ as a single WFF $\paren {P \implies Q}$ and perform the method of truth tables on that expression.
Demonstrating this with the example given:
$\begin{array}{cc||cccccc}
p & q & (\neg & p ) & \implies & (p & \implies & q) \\
\hline
\F & \F & \T & \F & \T & \F & \T & \F \\
\F & \T & \T & \F & \T & \F & \T & \T \\
\T & \F & \F & \T & \T & \T & \F & \F \\
\T & \T & \F & \T & \T & \T & \T & \T \\
\end{array}$

As can be seen, the column under the main connective $\implies$ of $\paren {P \implies Q}$ is all $\T$.
Hence $\paren {\paren {\neg p} \implies \paren {p \implies q} }$ is a tautology.
Hence from Equivalence of Logical Implication and Conditional, $\neg p \vdash p \implies q$.
$\blacksquare$


Compare two WFFs in the same table
Alternatively, we can place the two WFFs side by side in the same truth table:
$\begin{array}{cc||cc||ccc}
p & q & \neg & p & p & \implies & q \\
\hline
\F & \F & \T & \F & \F & \T & \F \\
\F & \T & \T & \F & \F & \T & \T \\
\T & \F & \F & \T & \T & \F & \F \\
\T & \T & \F & \T & \T & \T & \T \\
\end{array}$
This time, we need to make sure that when the truth values in the columns under the first main connectives is $\T$, then it is also $\T$ under the second.
Note that this is exactly the same as putting a $\implies$ between the two and making a WFF out of the pair of them.
$\blacksquare$


Indirect Technique
The conventional technique of proving a tautology by means of a truth table can be unwieldy when there are many variables.
There is an indirect method of proving a tautology which is shorter.
It is recognised that the truth table for a tautology contains all $\T$ down the column containing the main connective.
Hence it follows that if there exist any instances of $\F$ in that column, the proposition under investigation is not a tautology.

Suppose we make the hypothesis that the proposition under investigation is not a tautology.
Then there exists an instance of $\F$ under the main connective.
We construct the heading of the truth table in the same way as for the conventional technique: one column for each variable and one for each connective.
Under the main connective we place $\F$.
Examining the conditions under which the consequence is $\F$ for that connective, we place truth values under the elements of the proposition which are in the scope of the main connective so as to allow $\F$.
Similarly we work backwards through each of the components of the proposition.
If it is impossible to complete the truth table row consistent with the behaviour of the connectives, then no $\F$ can appear under the main connective.
Therefore the proposition under investigation is a tautology.
If it is possible to complete the truth table row consistently, then the proposition under investigation is not a tautology.
$\blacksquare$


Notational Convenience
It is not actually necessary to include the truth values of the variables themselves (as we have done in the leftmost columns).
One is equally justified to write this:
$\begin{array}{ccccccc}
((p & \implies & q) & \implies & p) & \implies & p \\
\hline
\F & \T & \F & \F & \F & \T & \F \\
\F & \T & \T & \F & \F & \T & \F \\
\T & \F & \F & \T & \T & \T & \T \\
\T & \T & \T & \T & \T & \T & \T \\
\end{array}$
and it serves just as well.

However, it can help to clarify the derivation, as well as making the truth table easier to construct, if they are included. It's a matter of personal taste.


Also known as
The method of truth tables is also sometimes referred to as the method of matrices.
However, it can be argued that the term truth table is more specific than matrix and hence preferable.


Comment
Note that solution by truth table is valid only for Aristotelian logic, as it takes for granted the Law of Excluded Middle and the Principle of Non-Contradiction.
Within that context, it is a completely mechanical procedure and about as exciting as a strip-tease artist who starts the performance naked.


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.3$: The Construction and Application of Truth-Tables
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 6$
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $3$ Truth-Tables
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 4$: Using the Definitions
1988: Alan G. Hamilton: Logic for Mathematicians (2nd ed.) ... (previous) ... (next): $\S 1$: Informal statement calculus: $\S 1.2$: Truth functions and truth tables
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.6$: Truth Tables and Tautologies
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.4.1$: The meaning of logical connectives




