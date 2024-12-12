# 

Source: https://proofwiki.org/wiki/Degree_of_Vertex/Examples/Party_Puzzle



Example of Degrees of Vertices
You arrive at a small party with your partner, which $3$ other couples are also attending.
Several handshakes took place.
Nobody shook hands with themselves or their partners.
Nobody shook hands with anyone else more than once.
After all the handshaking had taken place, you asked each person, including your partner, how many times they had shaken hands.
Every person replied with a different answer.

$(1): \quad$ How many times did you shake hands?
$(2): \quad$ How many times did your partner shake hands?


Solution
Both you and your partner shook hands $3$ times.


Proof
The situation can be modelled by a simple graph $G$ of order $8$.
The number of edges of $G$ corresponds to the number of handshakes.
As nobody shook hands with either themselves or their partner, there were $6$ people available for each person to shake hands with.
Each of the $7$ people other than you shook hands between $0$ and $6$ times.
So by the Pigeonhole Principle, you yourself shook hands the same number of times as someone else.
The total number of handshakes those $7$ people made was $0 + 1 + 2 + 3 + 4 + 5 + 6 = 21$.
By the corollary to the Handshake Lemma, the total number of handshakes is even.
Hence you yourself must have shaken hands an odd number of times in order make that total number even.

It is immediate that the person who shook hands $6$ must be the partner of the person who shook hands $0$ times, otherwise they would have shaken hands with each other.
The guest who shook hands $5$ times shakes hands with everybody except:

his or her partner
the person who shook hands $0$ times
leaving his or her partner to be the person who shook hands once.
The guest who shook hands $4$ times shakes hands with everybody except:

his or her partner
the person who shook hands $0$ times
the person who shook hands once
leaving his or her partner to be the person who shook hands twice.

The situation now is that the final pair of guests both shook hands $3$ times.
One of these is you.

The following diagram illustrates the solution.
Note that the vertices corresponding to the other guests are labelled according to their degree.


$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $2$: Elementary Concepts of Graph Theory: $\S 2.1$: The Degree of a Vertex: Problem $13$




