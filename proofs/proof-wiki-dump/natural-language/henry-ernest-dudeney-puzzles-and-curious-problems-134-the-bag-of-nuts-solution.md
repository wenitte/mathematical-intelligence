# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/134_-_The_Bag_of_Nuts/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $134$
The Bag of Nuts
There are $100$ nuts distributed between $5$ bags.
In the first and second there are altogether $52$ nuts;
in the second and third there are $43$;
in the third and fourth there are $34$;
in the fourth and fifth, $30$.
How many nuts are there in each bag?


Solution
In the first to fifth bags in order, the number of nuts is:

$27, 25, 18, 16, 14$


Proof
Let $a$, $b$, $c$, $d$ and $e$ be the number of nuts in each of the first, second, third, fourth and fifth bags respectively.
We have:














\(\ds a + b + c + d + e\)

\(=\)







\(\ds 100\)





There are $100$ nuts distributed between $5$ bags.














\(\ds a + b\)

\(=\)







\(\ds 52\)





In the first and second there are altogether $52$ nuts;














\(\ds b + c\)

\(=\)







\(\ds 43\)





in the second and third there are $43$;














\(\ds c + d\)

\(=\)







\(\ds 34\)





in the third and fourth there are $34$;














\(\ds d + e\)

\(=\)







\(\ds 43\)





in the fourth and fifth, $30$.




We set up this system of linear simultaneous equations in matrix form as:

$\begin {pmatrix}
1 &  1 &  1 &  1 &  1 \\
1 &  1 &  0 &  0 &  0 \\
0 &  1 &  1 &  0 &  0 \\
0 &  0 &  1 &  1 &  0 \\
0 &  0 &  0 &  1 &  1 \\

\end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ d \\ e \end {pmatrix} = \begin {pmatrix} 100 \\ 52 \\ 43 \\ 34 \\ 30 \end {pmatrix}$
It remains to solve this matrix equation.

In reduced echelon form, this gives:

$\begin {pmatrix}
1 &  0 &  0 &  0 &  0 \\
0 &  1 &  0 &  0 &  0 \\
0 &  0 &  1 &  0 &  0 \\
0 &  0 &  0 &  1 &  0 \\
0 &  0 &  0 &  0 &  1 \end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ d \\ e \end {pmatrix} = \begin {pmatrix} 27 \\ 25 \\ 18 \\ 16 \\ 14 \end {pmatrix}$


from which the contents of the bags can be read off directly.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $134$. -- The Bag of Nuts
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $207$. The Bag of Nuts




