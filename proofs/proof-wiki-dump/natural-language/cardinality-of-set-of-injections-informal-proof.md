# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Injections/Informal_Proof

Theorem
Let $S$ and $T$ be finite sets.

The number of injections from $S$ to $T$, where $\card S = m, \card T = n$ is often denoted ${}^m P_n$, and is:

${}^m P_n = \begin {cases} \dfrac {n!} {\paren {n - m}!} & : m \le n \\ 0 & : m > n \end {cases}$


Informal Proof
This is the same question as determining how many permutations there are of $m$ objects out of $n$.
Informally, the thinking goes like this.

We pick the elements of $S$ in any arbitrary order, and assign them in turn to an element of $T$.
The first element of $S$ can be mapped to any element of $T$, so there are $n$ options for the first element.
The second element of $S$, once we've mapped the first, can be mapped to any of the remaining $n-1$ elements of $T$, so there are $n-1$ options for that one.
And so on, to the $m$th element of $S$, which has $n - \paren {m - 1}$ possible elements in $T$ that it can be mapped to.
Each mapping is independent of the choices made for all the other mappings, so the total number of mappings from $S$ to $T$ is:

$n \paren {n - 1} \paren {n - 2} \cdots \paren {n - m + 1} = \dfrac {n!} {\paren {n - m}!}$
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Where does this fit?If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1971: George E. Andrews: Number Theory: $\S 3.1$: Theorem $3.1$




