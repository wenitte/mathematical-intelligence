# 

Source: https://proofwiki.org/wiki/Identity_Elements_occupy_Diagonal_of_Cayley_Table_in_Inverse_Row_Form

Theorem
Let $\struct {G, \circ}$ be a finite group.
Let $\CC$ be a Cayley table for $\struct {G, \circ}$ presented in inverse row form.
Then all the entries in the main diagonal of $\CC$
are instances of the identity element.


Proof
By definition of inverse row form, the rows of $\CC$ are headed by the inverse elements of the elements which head the corresponding columns.
The entries in the main diagonal of $\CC$ have the same column number as row number.
Let $\sqbrk c_{k k}$ denote the entry of $\CC$ corresponding to the element where the $k$th row intersects the $k$th column.
Let $a$ be the element which heads column $k$.
Then, by definition, $a^{-1}$ is the element which heads row $k$.
Thus the element which occupies entry $\struct c_{k k}$ is $a^{-1} \circ a = e$.
Hence the result.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 5$: The Multiplication Table




