# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/206_-_The_Triangular_Plantation/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $206$
The Triangular Plantation
A man had a plantation of twenty-one trees set out in the triangular form shown in the diagram.

If he wished to enclose a triangular piece of ground with a tree at each of the three angles,
how may different ways of doing it are there from which he might select?
The dotted lines show three ways of doing it.
How many are there altogether?


Solution
$1216$


Proof
The number of ways to select $3$ from $21$ is the binomial coefficient $\dbinom {21} 3$ which evaluates to $\dfrac {21 \times 20 \times 19} {3 \times 2 \times 1} = 1330$.
All of these form a triangle except where the trees are in a straight line.
Hence we need to eliminate all the latter.


Observe that the triangle of $21$ consists of lines of $1$, $2$, $3$, $4$, $5$ and $6$, which can be constructed in $3$ different ways, depending on which corner you place the $1$ at.
For each line of $6$, there are $\dbinom 6 3 = 20$ lines of $3$.
In each line of $5$, there are $\dbinom 5 3 = 10$ lines of $3$.
In each line of $4$, there are $\dbinom 4 3 = 4$ lines of $3$.
In each line of $3$, there is just the one line of $3$.

Then there are the $3$ vertical lines of $3$, each of which is one more straight line to be eliminated
This gives $20 + 10 + 4 + 1 + 3 = 38$ arrangements to be eliminated from the count.
Each of these $38$ straight lines are found in each of the $3$ orientations of the triangle of $21$ trees.
Hence the number of lines of $3$ is $3 \times 38 = 114$
So the total count of triangular arrangements is $1330 - 114 = 1216$.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $206$. -- The Triangular Plantation
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $286$. The Triangular Plantation




