# 

Source: https://proofwiki.org/wiki/Quantifier_has_Unique_Scope



Theorem
Let $\mathbf A$ be a WFF of predicate logic.
Let $Q$ be an occurrence of a quantifier in $\mathbf A$.

Then there exists a unique well-formed part of $\mathbf A$ which (omitting outermost parentheses) begins with that occurrence $Q$.

This unique well-formed part of $\mathbf A$ is called the scope of the occurrence of $Q$.


Proof
Existence
First, from the rules of formation of predicate logic, we have that whenever a quantifier is included in a WFF, it appears in the form:

$\paren {Q x: \mathbf B }$
where $\mathbf B$ is itself a WFF.
Hence it is clear that $\paren {Q x: \mathbf B}$ is a well-formed part of $\mathbf A$ which begins with $Q$.
$\Box$


Uniqueness
Now we prove that this well-formed part is unique.
Suppose $\mathbf B$ and $\mathbf C$ are both well-formed parts of $\mathbf A$ which begin with the given occurrence of $Q$.
Since $\mathbf B$ and $\mathbf C$ both begin with the same $Q$, neither one can be the prefix of the other, by Prefix of WFF of Predicate Logic is not WFF.
Therefore, $\mathbf B$ and $\mathbf C$ are necessarily the same.
Hence the result.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability: $\S 2.3$: Theorem $2.3.1$




