# 

Source: https://proofwiki.org/wiki/Coset_Decoding_Table/Examples/(6,_3)_code_in_Z2

Example of Coset Decoding Table
Let $C$ be the linear code:

$C = \set {000000, 100110, 010101, 110011, 001011, 101101, 011110, 111000}$

Then the coset decoding table $T$ for $C$ is:

$\begin{array} {cccccccc}
000000 & 100110 & 010101 & 110011 & 001011 & 101101 & 011110 & 111000 \\
100000 & 000110 & 110101 & 010011 & 101011 & 001101 & 111110 & 011000 \\
010000 & 110110 & 000101 & 100011 & 011011 & 111101 & 001110 & 101000 \\
001000 & 101110 & 011101 & 111011 & 000011 & 100101 & 010110 & 110000 \\
000100 & 100010 & 010001 & 110111 & 001111 & 101001 & 011010 & 111100 \\
000010 & 100100 & 010111 & 110001 & 001001 & 101111 & 011100 & 111010 \\
000001 & 100111 & 010100 & 110010 & 001010 & 101100 & 011111 & 111001 \\
100001 & 000111 & 110100 & 010010 & 101010 & 001100 & 111111 & 011001 \\
\end{array}$

Note that it is not easy to find the $8$th coset leader.
It has to be an example of an element $v$ of $\map V {6, 2}$ of weight $2$ which does not exist anywhere in the other $7$ rows.
Hence we must try each one in turn, and scan the coset decoding table as it has been constructed so far to see whether it is already there.
This may take some time to do.


This article is complete as far as it goes, but it could do with expansion.In particular: When the appropriate material is in place, explain that this may be an $\map o {n^2}$ operation.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Having chosen such a coset leader, it is noted that it is not unique: $010010$ or $001100$ could equally well have been chosen.


Example of Use
To decode an element $v$ of $\map V {6, 2}$, we locate $v$ in $T$, and replace it with the element found in the first row of the same column that $v$ is in.
Thus, for example, let $v := 011010$.
$v$ is in the $5$th row and the $7$th column.
Hence its corresponding transmitted codeword $u$ is found in the $1$st row of the $7$th column:

$u = 011110$
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $6$: Error-correcting codes: Example $6.16$




