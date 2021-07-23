import sys

def columns2table(clear_blank=False):
	# read columns
	col_count = 0
	print('Input a column:\n')
	cols = []
	s = input()	
	temp_col = []
	while len(s):
		if s == '|':
			cols.append(temp_col)
			temp_col = []
			s = input()
			continue
		elif s == 'EOF':
			cols.append(temp_col)
			break
		if clear_blank and not s.strip():
			s = input()
			continue
		temp_col.append(s.strip())
		s = input()
	cols = zip(*cols)
	for row in cols:
		print(f'| {" | ".join(row)} |')
		

function_mapper = {
	'columns2table': columns2table	
}
print(f'Running function: {sys.argv[1]}')

function_mapper[sys.argv[1]]()

