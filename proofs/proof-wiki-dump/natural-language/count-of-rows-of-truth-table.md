# 

Source: https://proofwiki.org/wiki/Count_of_Rows_of_Truth_Table

Theorem
Let $P$ be a WFF of propositional logic.
Suppose $\PP$ is of finite size such that it contains $n$ different letters.

Then a truth table constructed to express $P$ will contain $2^n$ rows.


Proof
In a truth table, one row is needed for each boolean interpretation of $P$.
Let $S$ be the set of different letters used in $P$.
The result then follows from applying Number of Boolean Interpretations for Finite Set of Variables to $S$.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.1$: The Truth-Table Method of Testing the Validity of Arguments
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.4.1$: The meaning of logical connectives




